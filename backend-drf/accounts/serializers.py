
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,  style ={'input_type': 'password'})
    class Meta:
        model= User
        fields =['username', 'email', 'password']
    
    def create(self, validated_data):
        # User.objects.create = save the password in a plain text
        # User.objects.create_user = automatically hash the password
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
            # **validated_data          

        )
       # user = User.objects.create_user(**validated_data)
        return user