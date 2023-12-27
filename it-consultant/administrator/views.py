from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import (generics, permissions,
		viewsets, response, decorators, views)
import json
from . import models
from . import serializers
# Create your views here.

"""
	Note: All List Api does not require authentication
	to receive but some individual detailed view requires
	it.
"""

DEFAULT_PERMISSIONS = [permissions.IsAuthenticated]
ALLOW_ANY = [permissions.AllowAny]
# class MyLoginView(views.LoginView):
# 	def get_response(self, response):
# 		return response


@decorators.api_view(["GET"])
@decorators.permission_classes(DEFAULT_PERMISSIONS)
def custom_func_view(request):
	return response.Response({"return": "Hello World \n"})

# Note: Every mixin class created is to reduce the need of rewriting 
# an attribute/method of the subclass

class FAQCategoryMixin:
	queryset = models.FAQCategory.objects.all()
	serializer_class = serializers.FAQCategorySerializer
	permission_classes = DEFAULT_PERMISSIONS


class ListFAQCategoryAPIView(generics.ListAPIView, FAQCategoryMixin):
	"""
		List View for list FAQ category
	"""
	permission_classes = ALLOW_ANY

class CreateFAQCategoryAPIView(generics.CreateAPIView, FAQCategoryMixin):
	"""
		Creates the frequently asked question view
	"""

class RUDFAQCategoryAPIView(generics.RetrieveUpdateDestroyAPIView, FAQCategoryMixin):
	"""
		Retrieve Update Destroy/Delete
		FAQ category view
	"""

# class FAQCategoryViewSet(viewsets.ModelViewSet):
# 	queryset = models.FAQCategory.objects.all()
# 	serializer_class = serializers.FAQCategorySerializer
# 	permission_classes = DEFAULT_PERMISSIONS

class FAQMixin:
	queryset = models.FAQ.objects.all()
	serializer_class = serializers.FAQSerializer
	permission_classes = DEFAULT_PERMISSIONS

class ListFAQAPIView(generics.ListAPIView, FAQMixin):
	"""
		List the FAQ view
	"""
	permission_classes = ALLOW_ANY

class CreateFAQAPIView(generics.CreateAPIView, FAQMixin):
	"""
		Creates API Frequently Asked Question
	"""

class RUDFAQAPIView(generics.RetrieveUpdateDestroyAPIView, FAQMixin):
	"""
		Retrieve Update Destroy the 
		FAQ view
	"""

# class FAQViewSet(viewsets.ModelViewSet):
# 	queryset = models.FAQ.objects.all()
# 	serializer_class = serializers.FAQSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = get_user_model().objects.all()
	serializer_class = serializers.UserSerializer
	permission_classes = DEFAULT_PERMISSIONS

# class ServiceViewSet(viewsets.ModelViewSet):
# 	queryset = models.RequestService.objects.all()
# 	serializer_class = serializers.RequestServiceSerializer
# 	permission_classes = DEFAULT_PERMISSIONS

class ServiceMixin:
	queryset = models.RequestService.objects.all()
	serializer_class = serializers.RequestServiceSerializer
	permission_classes = DEFAULT_PERMISSIONS

class ListServiceAPIView(generics.ListAPIView, ServiceMixin):
	"""
		List Servie API View
	"""
	permission_classes = ALLOW_ANY

class CreateServiceAPIView(generics.CreateAPIView, ServiceMixin):
	"""
		Creates The Service View
	"""

class RUDServiceAPIView(generics.RetrieveUpdateDestroyAPIView, ServiceMixin):
	"""
		Retrieve Update Destroy
		Request Service View
	"""


# class TeamLeadViewSet(viewsets.ModelViewSet):
# 	queryset = models.TeamLead.objects.all()
# 	serializer_class = serializers.TeamLeadSerializer
# 	permission_classes = DEFAULT_PERMISSIONS

class TeamLeadMixin:
	queryset = models.TeamLead.objects.all()
	serializer_class = serializers.TeamLeadSerializer
	permission_classes = DEFAULT_PERMISSIONS

class ListTeamLeadAPIView(generics.ListAPIView, TeamLeadMixin):
	"""
		List all team leads api view
	"""
	permission_classes = ALLOW_ANY

class CreateTeamLeadAPIView(generics.CreateAPIView, ServiceMixin):
	"""
		Creates The team leader for a particaular team
	"""

class RUDTeamLeadAPIView(generics.RetrieveUpdateDestroyAPIView, TeamLeadMixin):
	"""
		Retrieve Update Destroy/Delete
		Team Lead Api View
	"""

# class TeamMemberViewSet(viewsets.ModelViewSet):
# 	queryset = models.TeamMember.objects.all()
# 	serializer_class = serializers.TeamMemberSerializer
# 	permission_classes = DEFAULT_PERMISSIONS

class TeamMemberMixin:
	queryset = models.TeamMember.objects.all()
	serializer_class = serializers.TeamMemberSerializer
	permission_classes = DEFAULT_PERMISSIONS

class ListTeamMemberAPIView(generics.ListAPIView, TeamMemberMixin):
	"""
		List Team Members API View
	"""
	permission_classes = ALLOW_ANY

class CreateTeamMemberAPIView(generics.CreateAPIView, TeamMemberMixin):
	"""
		Creates a team member for a particular group
	"""


class RUDTeamMemberAPIView(generics.RetrieveUpdateDestroyAPIView, TeamMemberMixin):
	"""
		Retrieve Update Destroy/Delete
		Team Member API View
	"""

# class TeamViewSet(viewsets.ModelViewSet):
# 	queryset = models.Team.objects.all()
# 	serializer_class = serializers.TeamSerializer
# 	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class TeamMixin:
	queryset = models.Team.objects.all()
	serializer_class = serializers.TeamSerializer
	permission_classes = DEFAULT_PERMISSIONS


class ListTeamAPIView(generics.ListAPIView, TeamMixin):
	"""
		List the Team API View
	"""
	default_permissions = ALLOW_ANY
class CreateTeamAPIView(generics.CreateAPIView, TeamMixin):
	"""
		Create Team Name API View
	"""

class RUDTeamAPIView(generics.RetrieveUpdateDestroyAPIView, TeamMixin):
	"""
		Retrieve Update Destroy/Delete
		The teams API
	"""

class ListContentCreateAPIView(generics.CreateAPIView):
	"""
		This is the API View that creates the list content
		model specified by the root utils folder
	"""
	queryset = models.ListContent.objects.all()
	serializer_class = serializers.ListContentSerializer
	permission_classes = DEFAULT_PERMISSIONS