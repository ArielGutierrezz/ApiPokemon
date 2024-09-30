from rest_framework import viewsets
from .serializer import PokemonesSerializer
from .models import Pokemones

# Create your views here.
class PokemonesView(viewsets.ModelViewSet):
    serializer_class = PokemonesSerializer
    queryset = Pokemones.objects.all()