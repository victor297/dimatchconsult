from django.utils import timezone
from django.db import models

# Create your models here.

class Client(models.Model):
	full_name = models.CharField(max_length=150)
	email = models.CharField(max_length=150, unique=True)
	created_on = models.DateTimeField(auto_now=True)

	def __str__(self):
		fln = self.full_name.split()
		return f'{fln[0]} {fln[-1]}'


class RequestService(models.Model):
	"""\
		Services that we offer
	"""
	title = models.CharField(max_length=80, default='Financial Consultancy')
	heading1 = models.CharField(max_length=120)
	content1 = models.TextField()
	heading2 = models.CharField(max_length=120)
	content2 = models.TextField()
	heading3 = models.CharField(max_length=120)
	content3 = models.TextField()
	subheading = models.CharField(max_length=80)
	written_on = models.DateTimeField(auto_now=True)
	image = models.CharField(max_length=150)

	def __str__(self):
		return f"{self.title}"

class ListContent(models.Model):
	"""\
		`RequestService:prototype`
		A related field from the prototype given
	"""
	description = models.TextField()
	service = models.ForeignKey(RequestService, related_name='list_content', on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.description}"

class FAQCategory(models.Model):
	name = models.CharField(max_length=80, unique=True)

class FAQ(models.Model):
	"""\
		The frequently asked question model
	"""
	question = models.CharField(max_length=150, unique=True)
	answer = models.TextField()
	category = models.ForeignKey(FAQCategory, related_name='items', on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.question}"

class Team(models.Model):
	"""\
		The team table or model
	"""
	name = models.CharField(max_length=120)

	def __str__(self):
		return f"{self.name}"

class TeamLead(models.Model):
	"""\
		`Team:prototype`
		Related Field
	"""
	name = models.CharField(max_length=150)
	position = models.CharField(max_length=80)
	image = models.CharField(max_length=150)
	team = models.ForeignKey(Team, related_name='team_lead', on_delete=models.CASCADE)

class TeamMember(models.Model):
	name = models.CharField(max_length=120)
	position = models.CharField(max_length=80, help_text='Role Played In The Team')
	image = models.CharField(max_length=150)
	team = models.ForeignKey(Team, related_name='members', on_delete=models.CASCADE)

class Project(models.Model):
	title = models.CharField(max_length=150)
	image = models.CharField(max_length=150)
	client_name = models.CharField(max_length=150)
	location = models.TextField()
	date=models.CharField(max_length=50)
	website = models.TextField()
	details = models.TextField()
	details2 = models.TextField()

class ProjectListing(models.Model):
	content = models.TextField()


