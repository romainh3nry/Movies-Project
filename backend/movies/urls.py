from django.urls import path
from .views import MoviesList, MovieDetail

urlpatterns = [
    path('all/', MoviesList.as_view(), name='all_movies'),
    path('get/<str:id>/', MovieDetail.as_view(), name="movie_detail")
]