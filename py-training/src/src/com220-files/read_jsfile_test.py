import read_jsfile


def test_canAssertTrue():
    assert True


def test_count_elements():
    file = open('/home/adriana/code/cohort3/src/javascript/syntax.js', 'r')
    assert read_jsfile.count_element(
        file) == {'line': 172, 'else': 5, 'char': 3119}
