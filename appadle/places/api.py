from places.models import Place
from rest_framework import viewsets, permissions
from .serializers import PlaceSerializer

# Place Viewset

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = PlaceSerializer