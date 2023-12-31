from django.contrib.auth import get_user_model
from rest_framework import serializers
from . import models
# Models Serializers
class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = get_user_model()
		fields = [
			"username", "email", "password", 'id'
		]
		ordering = ["-id"]


class ClientSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Client
		fields = ('full_name', 'email', 'created_on', 'id', 'has_been_answered')
		ordering = ["-id"]

class RequestServiceSerializer(serializers.ModelSerializer):
	list_content = serializers.StringRelatedField(many=True)
	class Meta:
		model = models.RequestService
		fields = [
			"title", "heading1", "content1", "heading2",
			"content2", "heading3", "content3", "subheading",
			"image", "written_on", "list_content", "id"
		]
		ordering = ["-written_on"]

class CreateListSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField()
	class Meta:
		model = models.ListContent
		fields = [
			'id',
			'description'
		]

class CreateServiceSerializer(serializers.ModelSerializer):
	list_content = CreateListSerializer(many=True)
	class Meta:
		model = models.RequestService
		fields = [
			"title", "heading1", "content1", "heading2",
			"content2", "heading3", "content3", "subheading",
			"image", "list_content"
		]
		ordering = ["-written_on"]

	def create(self, validated_data):
		v_list_content = validated_data.pop('list_content')
		v_service = validated_data
		service = models.RequestService.objects.create(**validated_data)
		for list_content in v_list_content:
			list_content.pop('id')
			models.ListContent.objects.create(**list_content, service=service)
		return service

	def update(self, instance, validated_data):
		list_content = validated_data.pop('list_content')
		instance.heading1 = validated_data.get('heading1', instance.heading1)
		instance.content2 = validated_data.get('content2', instance.content2)
		instance.heading2 = validated_data.get('heading2', instance.heading2)
		instance.content2 = validated_data.get('content2', instance.content2)
		instance.heading3 = validated_data.get('heading3', instance.heading3)
		instance.content3 = validated_data.get('content3', instance.content3)
		instance.subheading = validated_data.get('subheading', instance.subheading)
		instance.image = validated_data.get('image', instance.image)
		instance.image2 = validated_data.get('image2', instance.image2)

		for list_c in instance.list_content.all():
			for content_list in list_content:
				if (list_c.pk == list_content.get('id')):
					list_c.description = list_content.get('description')
					list_c.save()
					break
		return instance

class ListContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ListContent
		fields = ('description', 'service', 'id')
		ordering = ["-id"]

class FAQSerializer(serializers.ModelSerializer):
	category = serializers.StringRelatedField(many=False)
	class Meta:
		model = models.FAQ
		fields = ["question", "answer", "category", 'id']
		ordering = ["-id"]

class FAQCategorySerializer(serializers.ModelSerializer):
	items = FAQSerializer(many=True)
	class Meta:
		model = models.FAQCategory
		fields = ("name", 'items', 'id')
		ordering = ["-name"]

class CreateFAQCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = models.FAQCategory
		fields = ("name",)
		ordering = ["-name"]


class CreateFAQSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.FAQ
		fields = ["question", "answer", "category"]
		ordering = ["-id"]

class TeamLeadSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField()
	class Meta:
		model = models.TeamLead
		fields = ('name', 'position', 'image', 'id')
		ordering = ["-name"]

class CreateTeamLeadSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.TeamLead
		fields = ('name', 'position', 'image')
		ordering = ["-name"]


class TeamMemberSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField()
	class Meta:
		model = models.TeamMember
		fields = ('name', 'position', 'image', 'id')
		ordering = ["-name"]

class CreateTeamMemberSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.TeamMember
		fields = ('name', 'position', 'image')
		ordering = ["-name"]

class TeamSerializer(serializers.ModelSerializer):
	team_lead = TeamLeadSerializer(many=True)
	members = TeamMemberSerializer(many=True)
	class Meta:
		model = models.Team
		fields = ("id", "name", "team_lead", "members")
		ordering = ["-id"]

class CreateTeamSerializer(serializers.ModelSerializer):
	team_lead = TeamLeadSerializer(many=True)
	members = TeamMemberSerializer(many=True)
	class Meta:
		model = models.Team
		fields = ("name", "team_lead", "members")
		ordering = ["-id"]

	def create(self, validated_data):
		team_leads = validated_data.pop('team_lead')
		members = validated_data.pop('members')
		team = models.Team.objects.create(**validated_data)
		for team_lead in team_leads:
			team_lead.pop('id')
			models.TeamLead.objects.create(team=team, **team_lead)
		for member in members:
			member.pop('id')
			models.TeamMember.objects.create(team=team, **member)
		return team

	def update(self, team_instance, validated_data):
		team_leads = validated_data.pop('team_lead')
		members = validated_data.pop('members')
		team = validated_data
		team_instance.name = validated_data.get('name', team_instance.name)
		for team_lead in team_instance.team_lead.all():
			#loops over the validated team leads
			for v_team_lead in team_leads:
				#should only change if validated data and lead model have matching id
				if (team_lead.pk == v_team_lead.get('id')):
					team_lead.name = v_team_lead.get('name', team_lead.name)
					team_lead.position = v_team_lead.get('position', team_lead.position)
					team_lead.image = v_team_lead.get('image', team_lead.image)
					team_lead.save()
					break #breaks the inner loop because it shouldn't be expecting matching lead for the current loop
		for member in team_instance.members.all():
			for v_member in members:
				if (member.pk == v_member.get('id')):
					member.name = v_member.get('name', member.name)
					member.position = v_member.get('position', member.position)
					member.image = v_member.get('image', team_lead.image)
					member.save()
					break
		team_instance.save()
		return team_instance