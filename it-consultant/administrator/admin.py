from django.contrib import admin
from . import models

# Register your models here.

class ClientAdmin(admin.ModelAdmin):
	list_display = (
		'full_name',
		'email',
	)

class RequestServiceAdmin(admin.ModelAdmin):
	list_display = (
		'client',
		'service',
		'description',
	)


admin.site.register(models.Client, ClientAdmin)
admin.site.register(models.RequestService)
admin.site.register(models.ListContent)
admin.site.register(models.FAQCategory)
admin.site.register(models.FAQ)
admin.site.register(models.Team)
admin.site.register(models.TeamLead)
admin.site.register(models.TeamMember)
admin.site.register(models.Project)
admin.site.register(models.ProjectListing)