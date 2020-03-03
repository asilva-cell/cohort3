import cantax


def test_valid_income():  # income>0
    assert cantax.tax_payment(-5) == 'Your income must be greater zero.'
    assert cantax.tax_payment(0) == 'Your income must be greater zero.'


def test_first_tax_bracker():  # <=$48,535
    assert cantax.tax_payment(48535) == 7280.25


def test_second_tax_bracker():  # >$48,535, but <=$97,069
    assert cantax.tax_payment(48536) == 7280.45
    assert cantax.tax_payment(97069) == 17229.72


def test_third_tax_bracker():  # >$97,069, but <=$150,473
    assert cantax.tax_payment(97070) == 17229.98
    assert cantax.tax_payment(150473) == 31114.76


def test_forth_tax_bracker():  # >$150,473, but <=$214,368
    assert cantax.tax_payment(150474) == 31115.05
    assert cantax.tax_payment(214368) == 49644.31


def test_fifth_tax_bracker():  # >$214,368
    assert cantax.tax_payment(214369) == 49644.64
