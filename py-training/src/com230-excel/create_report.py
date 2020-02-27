from read_excel import read_xls_file
import openpyxl

wb_path = '/home/adriana/code/cohort3/py-training/src/com230-excel/gym_classes_instructors_data.xlsx'
wb_obj = read_xls_file(wb_path)

def get_gym_class_info(class_id):
    print('from get class data')

get_gym_class_info('id')