from django.shortcuts import render
from rest_framework import viewsets, response, permissions
from . import models, serializers
# Create your views here.

class ClientsModelViewSet(viewsets.ModelViewSet):
	queryset = models.Client.objects.all()
	serializer_class = serializers.ClientSerializer