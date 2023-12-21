from django.contrib.auth import get_user_model
from rest_framework import serializers

from . import models


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = get_user_model()
		fields = [
			"username", "email", "password",
		]

class ClientSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Client
		fields = ('full_name', 'email', 'created_on')

class RequestServiceSerializer(serializers.ModelSerializer):
	list_content = serializers.StringRelatedField(many=True)
	class Meta:
		model = models.RequestService
		fields = [
			"title", "heading1", "content1", "heading2",
			"content2", "heading3", "content3", "subheading",
			"image", "written_on", "list_content"
		]


class ListContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.ListContent
		fields = ('description', 'service')