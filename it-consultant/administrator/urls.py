from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

app_name = 'administrator'
router = SimpleRouter()

router.register("service", views.ServiceViewSet, basename='service')
router.register("user", views.UserViewSet, basename='user')

urlpatterns = [
    path('list-content/', views.ListContentCreateAPIView.as_view(), name='service-list')
]

urlpatterns += router.urls
