from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, permissions, viewsets, response, decorators
import json
from . import models
from . import serializers
# Create your views here.

default_permissions = [permissions.IsAdminUser, permissions.IsAuthenticated]

@decorators.api_view(["GET"])
def custom_func_view(request):
	return response.Response({"return": "Hello World \n"})

class FAQCategoryViewSet(viewsets.ModelViewSet):
	queryset = models.FAQCategory.objects.all()
	serializer_class = serializers.FAQCategorySerializer
	permission_classes = default_permissions

class FAQViewSet(viewsets.ModelViewSet):
	queryset = models.FAQ.objects.all()
	serializer_class = serializers.FAQSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = get_user_model().objects.all()
	serializer_class = serializers.UserSerializer
	permission_classes = default_permissions

class ServiceViewSet(viewsets.ModelViewSet):
	queryset = models.RequestService.objects.all()
	serializer_class = serializers.RequestServiceSerializer
	permission_classes = default_permissions

class TeamLeadViewSet(viewsets.ModelViewSet):
	queryset = models.TeamLead.objects.all()
	serializer_class = serializers.TeamLeadSerializer
	permission_classes = default_permissions

class TeamMemberViewSet(viewsets.ModelViewSet):
	queryset = models.TeamMember.objects.all()
	serializer_class = serializers.TeamMemberSerializer
	permission_classes = default_permissions

class TeamViewSet(viewsets.ModelViewSet):
	queryset = models.Team.objects.all()
	serializer_class = serializers.TeamSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ListContentCreateAPIView(generics.CreateAPIView):
	queryset = models.ListContent.objects.all()
	serializer_class = serializers.ListContentSerializer
	permission_classes = default_permissions