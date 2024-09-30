from rest_framework import serializers
from .models import Pokemones

##dice que se tomen todos los campos de pokemones
class PokemonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemones
        fields = '__all__'