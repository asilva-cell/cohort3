# This function count the number of lines, else and characters in a file
import sys

def count_element(file):
    file_read = file.read()
    line_count = file_read.count('\n')
    else_count = file_read.count('else')
    char_count = len(file_read)
    return {'line': line_count, 'else': else_count, 'char' : char_count}




