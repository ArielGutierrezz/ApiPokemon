from django.db import models

# Create your models here.

#tipos de pokemon
class Pokemones(models.Model):
    tipos = [
        ('Ninguno', 'Ninguno'),
        ('Normal', 'Normal'),
        ('Fuego', 'Fuego'),
        ('Agua', 'Agua'),
        ('Planta', 'Planta'),
        ('Eléctrico', 'Eléctrico'),
        ('Hielo', 'Hielo'),
        ('Lucha', 'Lucha'),
        ('Veneno', 'Veneno'),
        ('Tierra', 'Tierra'),
        ('Roca', 'Roca'),
        ('Bicho', 'Bicho'),
        ('Fantasma', 'Fantasma'),
        ('Siniestro', 'Siniestro'),
        ('Acero', 'Acero'),
        ('Hada', 'Hada'),
        ('Volador', 'Volador'),
        ('Psíquico', 'Psíquico'),
        ('Dragón', 'Dragón'),
        ('Lucha', 'Lucha'),
        ('Tierra', 'Tierra'),
    ]

    nombre = models.CharField(max_length=50)
    tipo_pokemon = models.CharField(max_length=50, choices=tipos)
    tipo_pokemon2 = models.CharField(max_length=50, choices=tipos)
    descripcion = models.CharField(max_length=255)
    region = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre