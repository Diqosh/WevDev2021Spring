from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=250)
    price = models.FloatField()
    description = models.TextField(blank=True)
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }

class Category(models.Model):
    name = models.CharField(max_length=250)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }