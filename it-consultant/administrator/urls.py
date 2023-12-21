from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

app_name = 'administrator'
router = SimpleRouter()
router.register("user", views.UserViewSet, basename='user')
router.register("service", views.ServiceViewSet, basename='service')

urlpatterns = router.urls
# [
#     path('api/request-service/<int:pk>/', views.DetailServiceAPIView.as_view(), name='detail_request'),
#     path('api/create-user/', views.CreateUserAPIView.as_view(), name='create-user-api'),
#     path('api/request-service/', views.ServiceAPIView.as_view(), name='list_request'),
#     path('api/', views.IndexAPIView.as_view(), name='index'),
# ]