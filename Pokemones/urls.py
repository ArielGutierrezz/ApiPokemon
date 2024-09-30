from django.urls import path, include
from rest_framework import routers
from Pokemones import views

router = routers.DefaultRouter()
router.register(r'Pokemones', views.PokemonesView, 'Pokemones')

urlpatterns = [
    path('api/', include(router.urls))
]