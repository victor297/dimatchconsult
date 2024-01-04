from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

app_name = 'clients'

routers = SimpleRouter()
routers.register('clients', views.ClientsModelViewSet, basename='clients')

urlpatterns = [
]

urlpatterns += routers.urls