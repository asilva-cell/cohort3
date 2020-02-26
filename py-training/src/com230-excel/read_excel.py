import openpyxl
import datetime
import json

def date_to_string (data):
    if (isinstance(data, datetime.time)):
        return data.__str__()
    if (isinstance(data, datetime.datetime)):
        return data.__str__()

def create_json(input_data, output_file_name):
    file_name = f'{output_file_name}.json'.lower()
    print(file_name)
    with open(file_name, 'w+') as txt:
        txt.write(json.dumps(input_data, default=date_to_string, indent=4))

def read_excel (input_file):
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

    create_json(gym_data, 'gym_data_obj')
   

read_excel ('/home/adriana/code/cohort3/py-training/src/com230-excel/gym_classes_instructors_data.xlsx')