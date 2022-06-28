from parameters import Parameters
import os
import csv
import json


class ConvertCsvToJson:
    def __init__(self) :
        self.param = Parameters().load()
        self.output_path = os.path.dirname(os.getcwd()) + self.param['OUTPUT_PATH']
        self.file = self.get_file()
        self.file_path = self.output_path + '/' + self.file
        self.output = []

    def get_file(self):
        return [
            f for f in os.listdir(
                self.output_path
            ) if os.path.isfile(os.path.join(self.output_path, f))
        ][0]
    
    def convert(self, file):
        with open(file) as csvFile:
            csvReader = csv.DictReader(csvFile)
            for rows in csvReader:
                self.output.append(rows)
        with open(self.output_path + '/imdb_movies.json', 'w') as jsonFile:
            jsonFile.write(json.dumps(self.output, indent=4))
 
    def run(self):
        self.convert(self.file_path)
