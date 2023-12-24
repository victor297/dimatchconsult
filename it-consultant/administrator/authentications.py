from rest_framework.authentication import SessionAuthentication

class ExemptSessionCsrfAuthentication(SessionAuthentication):
	"""
		This class was created to exempt csrf validation
	"""
	def enforce_csrf(self, request):
		return