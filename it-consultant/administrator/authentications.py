from django.conf import settings
from drf_spectacular.extensions import OpenApiAuthenticationExtension
from rest_framework.authentication import SessionAuthentication as SA

class SessionAuthentication(SA):
	"""
		This class was created to exempt csrf validation
	"""
	def enforce_csrf(self, request):
		return

class SessionAuthenticationScheme(OpenApiAuthenticationExtension):
	target_class = 'administrator.authentications.SessionAuthentication'
	name = 'cookieAuth'
	priority = -1

	def get_security_definition(self, auto_schema):
		return {
		    'type': 'apiKey',
		    'in': 'cookie',
		    'name': settings.SESSION_COOKIE_NAME,
		}
