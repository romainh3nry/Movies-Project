from django.core.management.base import BaseCommand
from movies.models import Movie
import json
import os
import uuid


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        data = []
        json_file = self.load_json()
        for elt in json_file:
            elt['id'] = str(uuid.uuid4())
            data.append(elt)
        with open('movies_with_id.json', 'w') as outfile:
            outfile.write(json.dumps(data))

    def load_json(self):
        with open(os.path.dirname(os.path.abspath(__file__)) + '/movies.json') as f:
            return json.load(f)    
