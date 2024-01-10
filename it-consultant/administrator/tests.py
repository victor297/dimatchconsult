from django.urls import reverse
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from . import models
# Create your tests here.

class APITests(APITestCase):

	@classmethod
	def setUpTestData(cls):
		cls.requestsv = models.RequestService.objects.\
			create(title="A blob web app", heading1="heading1", content1="content...",
				heading2="second header", content2="../", heading3="dkf;", content3="...",
				subheading="subheading", image="/image.jpg")
		cls.faq_category1 = models.FAQCategory.objects.create(name="Santa")
		cls.faq1 = models.FAQ.objects.create(category=cls.faq_category1,
						question="Hello", answer="hi")

	def test_faq_viewset(self):
		response = self.client.get("/administrator/faq/")
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertContains(response, "Hello")
