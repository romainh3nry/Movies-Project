from django.db import models
from django.urls import reverse
import uuid

# Create your models here.


class Movie(models.Model):
    id = models.TextField(primary_key=True, default=uuid.uuid4)
    imdb_title_id = models.CharField(max_length=100, null=False, blank=False)
    title = models.CharField(max_length=150, null=False, blank=False)
    original_title = models.CharField(max_length=150, null=False, blank=False)
    year = models.CharField(max_length=50, null=True, blank=True)
    date_published = models.CharField(max_length=100, null=True, blank=True)
    genre = models.CharField(max_length=255, null=True, blank=True)
    duration = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    language = models.CharField(max_length=255, null=True, blank=True)
    director = models.CharField(max_length=255, null=True, blank=True)
    writer = models.CharField(max_length=255, null=True, blank=True)
    production_company = models.CharField(max_length=255, null=True, blank=True)
    actors = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    avg_vote = models.CharField(max_length=50, null=True, blank=True)
    vote = models.CharField(max_length=50, null=True, blank=True)
    budget = models.CharField(max_length=100, null=True, blank=True)
    usa_gross_income = models.CharField(max_length=100, null=True, blank=True)
    worldwide_gross_income = models.CharField(max_length=100, null=True, blank=True)
    metascore = models.CharField(max_length=100, null=True, blank=True)
    reviews_from_users = models.CharField(max_length=100, null=True, blank=True)
    reviews_from_critics = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self) -> str:
        return self.original_title
    
    class Meta:
        ordering = ["-date_published"]
        verbose_name_plural = "movies"
