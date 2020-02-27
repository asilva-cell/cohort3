import create_report
import datetime

def test_get_row_in_worksheet():
    assert create_report.get_row_in_worksheet('classes', 'class_id', 1) == {
        "class_id": 1,
        "class_name": "body combat",
        "class_duration": 60
    }
    assert create_report.get_row_in_worksheet('customers', 'customer_id', 1) == {
        'customer_id': 1,
        'first_name': 'Adriana',
        'last_name': 'Silva',
        'email': 'silva.adrianavc@gmail.com',
        'sign_up_date': datetime.datetime(2020, 1, 1, 0, 0)
    }
    assert create_report.get_row_in_worksheet('invoices', 'invoice_id', 1) == {
        'invoice_id': 1,
        'customer_id': 1,
        'schedule_id': 1,
        'date': datetime.datetime(2020, 1, 6, 0, 0)
    }
    assert create_report.get_row_in_worksheet('instructors', 'instructor_id', 1) == {
        'instructor_id': 1,
        'first_name': 'Jeff',
        'last_name': 'Dell',
        'email': 'jeff.dell@gmail.com',
        'phone': '403-456-3849'
    }
    assert create_report.get_row_in_worksheet('schedule', 'schedule_id', 1) == {
        'schedule_id': 1,
        'class_id': 8,
        'instructor_id': 3,
        'schedule_day': 'Monday',
        'schedule_time': datetime.time(18, 30),
        'active': 'yes'
    }
