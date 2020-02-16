
# define attribute / variables

def xnumber(a):
    return a

def my_str(a):
    return a

def my_bool(a, b):
    if a >= b:
        return True
    return False

def my_list(arr):
    return arr

# dictionary
def my_dic(dic):
    return dic["name"]

# none
def my_none(a):
    return

#operations
def add(a, b):
    return a + b

def even_odd(a):
    if (a % 2 == 0):
        return 'even'
    return 'odd'

#if/else
def smallest (a,b):
    if a<b:
        return a
    return b

def num_size(a):
    if a <= 0:
        return '{} is a negative number'.format(a)
    elif a <= 50:
        return '{} is a small number'.format(a)
    elif a <= 100:
        return '{} is a medium number'.format(a)
    else:
        return '{} is a large number'.format(a)

#list operations
def list_add_to_front(lis, item):
    lis.insert(0,item)
    return lis

def list_add_to_end(lis, item):
    lis.append(item)
    return lis

def list_remove_last(lis):
    lis.pop()
    return lis

def increase_by (value, a):
    return value + a

#loops
#loop throug lists
def for_loop_list (lis):
    total = 0
    for num in lis:
        total += num
    return total

#regular while loop
def add_all_num1(lis):
    i = 0
    total = 0
    while i < len(lis):
        total += lis[i]
        i+=1
    return total

#emulates do-while loop
def add_all_num2(lis):
    i = 0
    total = 0
    while True: 
        total += lis[i]
        i+=1
        if i == len(lis):
            break
    return total

def dic_retrieve_value(dic,key):
    try:
        if (dic[key]):
            return str(dic[key])
    except KeyError:
        return '{} key does not exist.'.format(key)

def create_dic(f_name, l_name, age):
    user_dic = {
        'f_name' : f_name,
        'l_name' : l_name,
        'age' : age}
    return user_dic

def email (f_name, l_name):
    return '{}.{}@evolveu.ca'.format(f_name,l_name).lower()