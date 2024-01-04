from django.db import models

# Create your models here.

class Client(models.Model):
	full_name = models.CharField(max_length=150)
	email = models.CharField(max_length=150, unique=True)
	has_been_answered = models.BooleanField(default=False)
	created_on = models.DateTimeField(auto_now=True)

	def __str__(self):
		fln = self.full_name.split()
		return f'{fln[0]} {fln[-1]}'
