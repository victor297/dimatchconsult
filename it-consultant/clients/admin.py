from django.contrib import admin
from . import models
# Register your models here.

class ClientAdmin(admin.ModelAdmin):
	list_display = (
		'full_name',
		'email',
	)

admin.site.register(models.Client, ClientAdmin)