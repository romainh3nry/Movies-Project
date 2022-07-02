from django.urls import path
from .views import MoviesList

urlpatterns = [
    path('all/', MoviesList.as_view(), name='all_movies'),
]