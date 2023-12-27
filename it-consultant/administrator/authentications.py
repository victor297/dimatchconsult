from rest_framework.authentication import SessionAuthentication as SA

class SessionAuthentication(SA):
	"""
		This class was created to exempt csrf validation
	"""
	def enforce_csrf(self, request):
		return