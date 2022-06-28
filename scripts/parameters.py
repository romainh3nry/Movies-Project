import json
import os


class Parameters:

    @staticmethod
    def load():
        with open(os.path.dirname(os.path.abspath(__file__)) + "/param.json", "r") as f:
            return json.load(f)
