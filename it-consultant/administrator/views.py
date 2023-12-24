from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, permissions, viewsets, response, decorators
import json
from . import models
from . import serializers
# Create your views here.

"""
	Note: All List Api does not require authentication
	to receive but some individual detailed view requires
	it.
"""

default_permissions = [permissions.IsAdminUser, permissions.IsAuthenticated]

@decorators.api_view(["GET"])
@decorators.permission_classes(default_permissions)
def custom_func_view(request):
	return response.Response({"return": "Hello World \n"})


class ListFAQCategoryAPIView(generics.ListAPIView):
	"""
		List View for list FAQ category
	"""
	queryset = models.FAQCategory.objects.all()
	serializer_class = serializers.FAQCategorySerializer

class RUDFAQCategoryAPIView(generics.RetrieveUpdateDestroyAPIView):
	"""
		Retrieve Update Destroy/Delete
		FAQ category view
	"""
	queryset = models.FAQCategory.objects.all()
	serializer_class = serializers.FAQCategorySerializer
	permission_classes = default_permissions

# class FAQCategoryViewSet(viewsets.ModelViewSet):
# 	queryset = models.FAQCategory.objects.all()
# 	serializer_class = serializers.FAQCategorySerializer
# 	permission_classes = default_permissions

class ListFAQAPIView(generics.ListAPIView):
	"""
		List the FAQ view
	"""
	queryset = models.FAQ.objects.all()
	serializer_class = serializers.FAQSerializer

class RUDFAQAPIView(generics.RetrieveUpdateDestroyAPIView):
	"""
		Retrieve Update Destroy the 
		FAQ view
	"""
	queryset = models.FAQ.objects.all()
	serializer_class = serializers.FAQSerializer
	permission_classes = default_permissions

# class FAQViewSet(viewsets.ModelViewSet):
# 	queryset = models.FAQ.objects.all()
# 	serializer_class = serializers.FAQSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = get_user_model().objects.all()
	serializer_class = serializers.UserSerializer
	permission_classes = default_permissions

# class ServiceViewSet(viewsets.ModelViewSet):
# 	queryset = models.RequestService.objects.all()
# 	serializer_class = serializers.RequestServiceSerializer
# 	permission_classes = default_permissions


class ListServiceAPIView(generics.ListAPIView):
	"""
		List Servie API View
	"""
	queryset = models.RequestService.objects.all()
	serializer_class = serializers.RequestServiceSerializer

class RUDServiceAPIView(generics.RetrieveUpdateDestroyAPIView):
	"""
		Retrieve Update Destroy
		Request Service View
	"""
	queryset = models.RequestService.objects.all()
	serializer_class = serializers.RequestServiceSerializer
	permission_classes = default_permissions


# class TeamLeadViewSet(viewsets.ModelViewSet):
# 	queryset = models.TeamLead.objects.all()
# 	serializer_class = serializers.TeamLeadSerializer
# 	permission_classes = default_permissions

class ListTeamLeadAPIView(generics.ListAPIView):
	"""
		List all team leads api view
	"""
	queryset = models.TeamLead.objects.all()
	serializer_class = serializers.TeamLeadSerializer

class RUDTeamLeadAPIView(generics.RetrieveUpdateDestroyAPIView):
	"""
		Retrieve Update Destroy/Delete
		Team Lead Api View
	"""
	queryset = models.TeamLead.objects.all()
	serializer_class = serializers.TeamLeadSerializer
	permission_classes = default_permissions

# class TeamMemberViewSet(viewsets.ModelViewSet):
# 	queryset = models.TeamMember.objects.all()
# 	serializer_class = serializers.TeamMemberSerializer
# 	permission_classes = default_permissions

class ListTeamMemberAPIView(generics.ListAPIView):
	"""
		List Team Members API View
	"""
	queryset = models.TeamMember.objects.all()
	serializer_class = serializers.TeamMemberSerializer

class RUDTeamMemberAPIView(generics.RetrieveUpdateDestroyAPIView):
	"""
		Retrieve Update Destroy/Delete
		Team Member API View
	"""
	queryset = models.TeamMember.objects.all()
	serializer_class = serializers.TeamMemberSerializer
	permission_classes = default_permissions

# class TeamViewSet(viewsets.ModelViewSet):
# 	queryset = models.Team.objects.all()
# 	serializer_class = serializers.TeamSerializer
# 	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ListTeamAPIView(generics.ListAPIView):
	"""
		List the Team API View
	"""
	queryset = models.Team.objects.all()
	serializer_class = serializers.TeamSerializer

class RUDTeamAPIView(generics.RetrieveUpdateDestroyAPIView):
	"""
		Retrieve Update Destroy/Delete
		The teams API
	"""
	queryset = models.Team.objects.all()
	serializer_class = serializers.TeamSerializer
	permission_classes = default_permissions

class ListContentCreateAPIView(generics.CreateAPIView):
	"""
		This is the API View that creates the list content
		model specified by the root utils folder
	"""
	queryset = models.ListContent.objects.all()
	serializer_class = serializers.ListContentSerializer
	permission_classes = default_permissions