from read_excel import read_xls_file
import openpyxl

wb_path = '/home/adriana/code/cohort3/py-training/src/com230-excel/gym_classes_instructors_data.xlsx'
wb_obj = read_xls_file(wb_path)

def get_row_in_worksheet(worksheet_name, col_name, item_name):
    for row in wb_obj[worksheet_name]:
        if row[col_name] == item_name:
            print(row)
            return row

