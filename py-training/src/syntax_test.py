import syntax


def test_num_given_xnumber():
    assert syntax.xnumber (100) == 100

def test_str_given_str():
    assert syntax.my_str ("hello") == "hello"

def test_bool_num1_geaterthan_num2():
    assert syntax.my_bool (2, 2) == True

def test_list_given_list():
    assert syntax.my_list ([1,2,3]) == [1,2,3]

def test_dict_given_dict():
    assert syntax.my_dic ({'name' :'Adri', 'phone': 1234567890}) == 'Adri'

def test_none():
    assert syntax.my_none (5) == None

def test_add():
    assert syntax.add (2, 2) == 4

def test_even_odd ():
    assert syntax.even_odd(2) == 'even'
    assert syntax.even_odd(5) == 'odd'

def test_smallest ():
    assert syntax.smallest(1,2) == 1
    assert syntax.smallest(5,2) == 2

def test_num_size():
    assert syntax.num_size(-1)== '-1 is a negative number'
    assert syntax.num_size(50)== '50 is a small number'
    assert syntax.num_size(51)== '51 is a medium number'
    assert syntax.num_size(100)== '100 is a medium number'
    assert syntax.num_size(101)== '101 is a large number'

def test_add_to_front_of_list():
    assert syntax.list_add_to_front([2, 3], 1) == [1,2,3]

def test_add_to_end_of_list():
    assert syntax.list_add_to_end([1, 2, 3], 'end') == [1,2,3,'end']

def test_remove_last_item():
    assert syntax.list_remove_last([1, 2, 3]) == [1,2]

def test_increase_value_by_given_num():
    assert syntax.increase_by(2,2) == 4

def test_forloop_though_list():
    assert syntax.for_loop_list([1,2,3]) == 6

def test_whileloop_though_list1():
    assert syntax.add_all_num1([1,2,3,4]) == 10

def test_emulate_do_whileloop():
    assert syntax.add_all_num2([1,2,3,4]) == 10

def test_retrieve_value_with_key():
    assert syntax.dic_retrieve_value({'name' :'Adri', 'phone': 1234567890}, 'phone') == '1234567890'
    assert syntax.dic_retrieve_value({'name' :'Adri', 'phone': 1234567890}, 'name') == 'Adri'
    assert syntax.dic_retrieve_value({'name' :'Adri', 'phone': 1234567890}, 'age') == 'age key does not exist.'

def test_create_dict_given_data():
    assert syntax.create_dic('Allan', 'Smith', 30) == {'f_name': 'Allan', 'l_name' : 'Smith', 'age' : 30}

def test_email_generator():
    assert syntax.email('Larry', 'Shumlich') == 'larry.shumlich@evolveu.ca'