from django.contrib.auth import get_user_model
from rest_framework import serializers
from . import models


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
		fields = ('full_name', 'email', 'created_on', 'id')
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

class CreateServiceSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.RequestService
		fields = [
			"title", "heading1", "content1", "heading2",
			"content2", "heading3", "content3", "subheading",
			"image", "written_on"
		]
		ordering = ["-written_on"]

class ListContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ListContent
		fields = ('description', 'service', 'id')
		ordering = ["-id"]

class FAQCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = models.FAQCategory
		fields = ("name", 'id')
		ordering = ["-name"]

class CreateFAQCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = models.FAQCategory
		fields = ("name",)
		ordering = ["-name"]

class FAQSerializer(serializers.ModelSerializer):
	category = serializers.StringRelatedField(many=False)
	class Meta:
		model = models.FAQ
		fields = ["question", "answer", "category", 'id']
		ordering = ["-id"]

class CreateFAQSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.FAQ
		fields = ["question", "answer", "category"]
		ordering = ["-id"]

class TeamLeadSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.TeamLead
		fields = ('name', 'position', 'image', 'team', 'id')
		ordering = ["-name"]

class CreateTeamLeadSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.TeamLead
		fields = ('name', 'position', 'image', 'team',)
		ordering = ["-name"]


class TeamMemberSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.TeamMember
		fields = ('name', 'position', 'image', 'team', 'id')
		ordering = ["-name"]

class CreateTeamMemberSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.TeamMember
		fields = ('name', 'position', 'image', 'team')
		ordering = ["-name"]

class TeamSerializer(serializers.ModelSerializer):
	team_lead = TeamLeadSerializer
	members = TeamMemberSerializer
	class Meta:
		model = models.Team
		fields = ("id", "name", "team_lead", "members")
		ordering = ["-id"]

class CreateTeamSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Team
		fields = ("name", "team_lead", "members")
		ordering = ["-id"]