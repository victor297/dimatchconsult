# Generated by Django 5.0 on 2023-12-21 00:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=150, unique=True)),
                ('created_on', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='FAQCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('image', models.CharField(max_length=150)),
                ('client_name', models.CharField(max_length=150)),
                ('location', models.TextField()),
                ('date', models.CharField(max_length=50)),
                ('website', models.TextField()),
                ('details', models.TextField()),
                ('details2', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ProjectListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='RequestService',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Financial Consultancy', max_length=80)),
                ('heading1', models.CharField(max_length=120)),
                ('content1', models.TextField()),
                ('heading2', models.CharField(max_length=120)),
                ('content2', models.TextField()),
                ('heading3', models.CharField(max_length=120)),
                ('content3', models.TextField()),
                ('subheading', models.CharField(max_length=80)),
                ('written_on', models.DateTimeField(auto_now=True)),
                ('image', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=150)),
                ('answer', models.TextField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='administrator.faqcategory')),
            ],
        ),
        migrations.CreateModel(
            name='ListContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='list_content', to='administrator.requestservice')),
            ],
        ),
        migrations.CreateModel(
            name='TeamLead',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('position', models.CharField(max_length=80)),
                ('image', models.CharField(max_length=150)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team_lead', to='administrator.team')),
            ],
        ),
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('position', models.CharField(help_text='Role Played In The Team', max_length=80)),
                ('image', models.CharField(max_length=150)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='members', to='administrator.team')),
            ],
        ),
    ]
