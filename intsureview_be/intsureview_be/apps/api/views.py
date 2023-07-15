from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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

    def post(self, request, *args, **kwargs):
        # Retrieve the form data from the request
        form_data = request.data

        # Check if required fields are missing
        if not form_data.get('firstName') or not form_data.get('lastName') or not form_data.get('email'):
            # if missing, return failure message and status 
            return Response({'message': 'Form submission failed. Required fields are missing.'}, status=status.HTTP_400_BAD_REQUEST)

        # if all fields are filled, return success message and status
        return Response({'message': 'Form submission successful'}, status=status.HTTP_200_OK)
