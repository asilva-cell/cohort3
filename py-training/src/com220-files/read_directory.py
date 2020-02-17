import os
from os.path import join, getsize

def dir_size(path):
    file_count = len(os.listdir(path))
    path_size = os.path.getsize(path)
    return f'There are {file_count} files and {path_size}' 