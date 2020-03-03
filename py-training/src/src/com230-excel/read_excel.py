import openpyxl
import datetime
import json

#Reads an excel file and returns a list of dictionaries
def read_xls_file (input_file):
    wb_obj = openpyxl.load_workbook(input_file)
    gym_data ={}
    for sheet in wb_obj:
        table = []
        for i, row in enumerate(sheet.iter_rows(values_only=True)):
            if i == 0:
                header = [title.value for title in sheet[1]]
            else:
                each_record = {}
                for j, data in enumerate(row):
                    each_record[header[j]]=data
                table.append(each_record)    
        gym_data[sheet.title]=table
    return gym_data

#saves json
def save_json(input_data, output_file_name):
    file_name = f'{output_file_name}.json'.lower()
    with open(file_name, 'w+') as txt:
        txt.write(json.dumps(input_data, default=str, indent=4))

#calls 
# file_path = '/home/adriana/code/cohort3/py-training/src/com230-excel/gym_classes_instructors_data.xlsx'
# read_xls_file(file_path)
# save_json(read_xls_file(file_path), 'gym_data')

