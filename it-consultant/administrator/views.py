from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, permissions, viewsets
import json
from . import models
from . import serializers
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
	queryset = get_user_model().objects.all()
	serializer_class = serializers.UserSerializer
	permissions_class = [permissions.IsAdminUser]

class ServiceViewSet(viewsets.ModelViewSet):
	queryset = models.RequestService.objects.all()
	serializer_class = serializers.RequestServiceSerializer
