from rest_framework import serializers

from . import models

class ClientSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Client
		fields = ('full_name', 'email', 'created_on')

class RequestServiceSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.RequestService
		fields = [
			"title", "heading1", "content1", "heading2",
			"content2", "heading3", "content3", "subheading",
			"image", "written_on"
		]