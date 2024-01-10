from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import render
from rest_framework import decorators, permissions, response
# Create your views here.

@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def send_client_mail(request):
	data = request.data
	print(data)
	try:
		if data.get('html'):
			send_mail(data['subject'].strip(),
				data['message'].strip(),
				None, data['recipients'], html=data.get('email'))
		send_mail(data['subject'].strip(),
				data['message'].strip(),
				None, data['recipients'])
	except BadHeaderError:
		return response.Response({"details": "Invalid mail header"})
	return response.Response({"details": f"mail sent to {data.get('recipients')[0]}"})