from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, serializers

from .models import Room
from .serializers import RoomSerializers


class RoomView(APIView):
    '''Комнаты чата '''

    def get(self, request):
        rooms = Room.objects.all()
        serializer = RoomSerializers(rooms, many=True)
        return Response(serializer.data)
