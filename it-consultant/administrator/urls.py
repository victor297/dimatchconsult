from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

app_name = 'administrator'
router = SimpleRouter()

# router.register("service", views.ServiceViewSet, basename='service')
router.register("user", views.UserViewSet, basename='user')
# router.register("team", views.TeamViewSet, basename='team')
# router.register("team-lead", views.TeamLeadViewSet, basename='team_lead')
# router.register("team-member", views.TeamMemberViewSet, basename='team_member')
# router.register("faq", views.FAQViewSet, basename='faq')
# router.register("faq-category-serializer", views.FAQCategoryViewSet, basename='category_serializer')

urlpatterns = [
    path('list-contents/', views.ListContentCreateAPIView.as_view(), name='service-list'),
    path('list-faq-categorys/', views.ListFAQCategoryAPIView.as_view(), name='faq-category-list'),
    path('rud-faq-category/', views.RUDFAQCategoryAPIView.as_view(), name='faq-category-rud'),
    path('list-faqs/', views.ListFAQAPIView.as_view(), name='faq-list'),
    path('rud-faq/', views.RUDFAQAPIView.as_view(), name='faq-rud'),
    path('list-services/', views.ListServiceAPIView.as_view(), name='service-list'),
    path('rud-service/', views.RUDServiceAPIView.as_view(), name='service-rud'),
    path('list-team-leads/', views.ListTeamLeadAPIView.as_view(), name='team-lead-list'),
    path('rud-team-lead/', views.RUDTeamLeadAPIView.as_view(), name='team-lead-rud'),
    path('list-team-members/', views.ListTeamMemberAPIView.as_view(), name='team-members-list'),
    path('rud-team-member/', views.RUDTeamMemberAPIView.as_view(), name='team-member-rud'),
    path('list-teams/', views.ListTeamAPIView.as_view(), name='team-list'),
    path('rud-team/', views.RUDTeamAPIView.as_view(), name='team-rud'),
]

urlpatterns += router.urls
