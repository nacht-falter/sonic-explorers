# Generated by Django 3.2.4 on 2023-09-18 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_auto_20230918_0911'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='title',
            field=models.CharField(max_length=100),
        ),
    ]