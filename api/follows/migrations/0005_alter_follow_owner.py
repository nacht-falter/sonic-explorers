# Generated by Django 3.2.4 on 2023-09-18 08:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('follows', '0004_auto_20230918_0957'),
    ]

    operations = [
        migrations.AlterField(
            model_name='follow',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='following', to=settings.AUTH_USER_MODEL),
        ),
    ]