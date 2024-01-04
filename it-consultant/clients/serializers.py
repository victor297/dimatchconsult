from rest_framework import serializers
from . import models


class ClientSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Client
		fields = ('full_name', 'email', 'created_on', 'id', 'has_been_answered')
		ordering = ["-id"]