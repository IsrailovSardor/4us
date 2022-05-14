from django.db import models

from django.contrib.auth.models import User


class Room(models.Model):
    created = models.ForeignKey(
            User,
            on_delete=models.CASCADE,
            verbose_name='Создатель')
    invited = models.ManyToManyField(
            User,
            verbose_name='Участники',
            related_name='invited_user')
    date = models.DateTimeField(
            "Дата создание", 
            auto_now_add=True)
    

    class Meta:
        verbose_name = 'Комната чата'
        verbose_name_plural = 'Комнаты чатов'

    def __str__(self) -> str:
        return f'created by {self.created}'


class Chat(models.Model):
    room = models.ForeignKey(
            Room, 
            verbose_name ='Комната чата',
            on_delete=models.CASCADE)
    user = models.ForeignKey(
            User, 
            verbose_name='Пользователь', 
            on_delete=models.CASCADE)
    text = models.TextField(
            'Сообщение', 
            max_length=250)
    date = models.DateTimeField(
            "Дата отправки",
            auto_now_add=True)


    class Meta:
        verbose_name = 'Сообщение чата'
        verbose_name_plural = 'Сообщение чатов'

    def __str__(self) -> str:
        return f"message by {self.user}"


# Create your models here.
