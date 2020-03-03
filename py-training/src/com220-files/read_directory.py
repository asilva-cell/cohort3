import os
from os.path import join, getsize


def dir_size(path):
    file_count = len(os.listdir(path))
    path_size = os.path.getsize(path)
    return f'There are {file_count} files in the directory, which has a total size of {path_size} bytes.'
