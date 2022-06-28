from parameters import Parameters
import zipfile
import os


class Unzip:
    
    def __init__(self):
        self.param = Parameters().load()
        self.data_path = os.path.dirname(os.getcwd()) + self.param['DATA_PATH']
        self.old_path = os.path.dirname(os.getcwd()) + self.param['OLD_PATH']
        self.output_path = os.path.dirname(os.getcwd()) + self.param['OUTPUT_PATH']
        self.file = self.get_file()
        self.file_path =  self.data_path + self.get_file()

    def get_file(self):
        return [
            f for f in os.listdir(
                self.data_path
            ) if os.path.isfile(os.path.join(self.data_path, f))
        ][0]

    def get_unzip(self, file):
        with zipfile.ZipFile(file, mode="r") as archive:
            archive.extractall(self.output_path)

    def run(self):
        if self.data_dir_is_not_empty:
            self.get_unzip(self.file_path)
    
    def data_dir_is_not_empty(self):
        if len(os.listdir(self.data_path)) > 0:
            return True
