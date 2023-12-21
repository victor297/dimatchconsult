from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

app_name = 'administrator'
router = SimpleRouter()

router.register("service", views.ServiceViewSet, basename='service')
router.register("user", views.UserViewSet, basename='user')
router.register("team", views.TeamViewSet, basename='team')
router.register("team-lead", views.TeamLeadViewSet, basename='team_lead')
router.register("team-member", views.TeamMemberViewSet, basename='team_member')

urlpatterns = [
    path('list-content/', views.ListContentCreateAPIView.as_view(), name='service-list')
]

urlpatterns += router.urls
