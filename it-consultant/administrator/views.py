from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, permissions, viewsets
import json
from . import models
from . import serializers
# Create your views here.

class ServiceViewSet(viewsets.ModelViewSet):
	querysets = models.RequestService.objects.all()
	serializer_class = serializers.RequestServiceSerializer