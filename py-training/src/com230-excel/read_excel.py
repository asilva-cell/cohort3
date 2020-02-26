import openpyxl
import datetime
import json

def date_to_string (data):
    if (isinstance(data, datetime.time)):
        return data.__str__()
    if (isinstance(data, datetime.datetime)):
        return data.__str__()
  


wb_obj = openpyxl.load_workbook('/home/adriana/code/cohort3/py-training/src/com230-excel/gym_classes_instructors_data.xlsx')

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


with open('gym_data.json', 'w+') as txt:
    txt.write(json.dumps(gym_data, default=date_to_string, indent=4))
