from read_excel import read_xls_file
import openpyxl
import os

wb_path = '/home/adriana/code/cohort3/py-training/src/com230-excel/gym_classes_instructors_data.xlsx'
wb_obj = read_xls_file(wb_path)

def get_row_in_worksheet(worksheet_name, col_name, item_name):
    collected_data=[]
    for row in wb_obj[worksheet_name]:
        if row[col_name] == item_name:
            collected_data.append(row)
    return collected_data

def get_data_for_report(cust_id):
    data ={}
    cust_info = get_row_in_worksheet('customers', 'customer_id', cust_id)
    cust_attendance = get_row_in_worksheet('invoices', 'customer_id',cust_id)
    for i in cust_attendance:
        attend_sche_info = get_row_in_worksheet('schedule', 'schedule_id', i['schedule_id'])
        class_day = attend_sche_info[0]['schedule_day']
        class_id = attend_sche_info[0]['class_id']
        class_name = get_row_in_worksheet('classes', 'class_id', class_id)[0]['class_name']
        instructor_id = attend_sche_info[0]['instructor_id']
        class_instructor = get_row_in_worksheet('instructors', 'instructor_id', instructor_id)[0]['f_name']
        data[i['invoice_id']] = {'class_name': class_name, 'class_instructor': class_instructor, 'class_day': class_day, 'date': i['date']}
    return data

def create_report(cust_id, data):
    report_width = 100
    col_width = 25
    cust_info = get_row_in_worksheet('customers', 'customer_id', cust_id)
    cust_data = data
    string = ""
    string += " INVOICE ".center(report_width, "-") + "\n"
    string += f"{cust_info[0]['f_name']} {cust_info[0]['l_name']}, you has attended {len(cust_data)} classes" + "\n"
    string += " Classes ".center(report_width, "-") + "\n"
    string += "Class Name".center(col_width) + "Instructor".center(col_width) + "Day".center(col_width) + "Date".center(col_width) +"\n"
    string += "-".center(report_width, "-") + "\n"
    for i, data in cust_data.items():
        class_name, instructor, day, _= data.values()
        date = data['date'].strftime("%b %d, %Y")
        string += f"{class_name}".title().ljust(col_width) + f"{instructor}".center(col_width) + f"{day}".center(col_width) + f"{date}".center(col_width) +"\n"
        string += "\n"*2
    return string

def safe_report_as_txt (file_name, string):
    with open(file_name, 'w+') as report:
        report.write(string)

def get_customer_invoice(cust_id):
    data = get_data_for_report(cust_id)
    report_string = create_report(cust_id, data)
    file_name = f"Invoice_Report_{cust_id}.txt"
    safe_report_as_txt(file_name, report_string)
    print(f"Invoice for Customer ID {cust_id} has been created.")

cust_id = int(input('Enter the Customer ID to create invoice:'))
get_customer_invoice(cust_id)