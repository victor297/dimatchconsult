from django.urls import reverse
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from . import models
# Create your tests here.

class APITests(APITestCase):

	@classmethod
	def setUpTestData(cls):
		cls.client1 = models.Client.objects.create(
			full_name="New Test Name",
			email="newemail@email.com",
		)
		cls.requestsv = models.RequestService.objects.\
					create(service="A blob web app",
						description="...", client=cls.client1)

	def test_index_api_view(self):
		response = self.client.get(reverse('administrator:index'))
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertAlmostEqual(models.Client.objects.count(), 1)

	def test_request_list_view(self):
		response = self.client.get(reverse('administrator:list_request'))
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(self.requestsv.client.full_name, self.client1.full_name)
		self.assertEqual(models.RequestService.objects.count(), 1)

	def test_request_detail_view(self):
		response = self.client.get(
			reverse('administrator:detail_request',
				kwargs={
					'pk': self.requestsv.id
				}
			),
			format='json'
		)
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertContains(response, "A blob web app")
