from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer

# Create your views here.


class MoviesList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MovieSerializer
    lookup_field = 'imdb_title_id'
    queryset = Movie.objects.all()
