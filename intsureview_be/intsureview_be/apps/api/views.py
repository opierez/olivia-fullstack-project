from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import re

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class FormSubmissionView(APIView):
    allowed_methods = ['POST']

    def validate_name(self, name):
        # Check if name contains only alphabets
        if not re.match(r'^[a-zA-Z]+$', name):
            return False
                
        return True

    def post(self, request):
        # Retrieve the form data from the request
        form_data = request.data

        # Check if either the first name or the last name is not valid
        if not self.validate_name(form_data['firstName']) or not self.validate_name(form_data['lastName']):
            # Return an error message and status if first or last name is invalid
            return Response({'message': 'Form submission failed. Please enter a valid first and last name.'}, status=status.HTTP_400_BAD_REQUEST)

        # If all fields are filled, return success message and status
        return Response({'message': 'Form submission successful'}, status=status.HTTP_200_OK)
