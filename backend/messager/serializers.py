from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Room


class UserSerializers(serializers.ModelSerializer):
    ''' Сериализация User для RoomSerializers  '''
    class Meta:
        model = User
        fields = ('id', 'username')


class RoomSerializers(serializers.ModelSerializer):
    ''' Сериализация комнат чата '''
    invited = UserSerializers(many=True)
    class Meta:
        model = Room
        fields = ('created', 'invited', 'date')


