from django.db import models

# Create your models here.


class Place(models.Model):
    name = models.CharField(max_length=100)
    tel = models.IntegerField()
    rating = models.IntegerField(blank=True)
    courtQty = models.IntegerField()
    material = models.CharField(max_length=30)
    address = models.CharField(max_length=200)
