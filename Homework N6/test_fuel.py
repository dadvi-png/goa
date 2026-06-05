from fuel import gauge, convert
def main():
    test_gauge()
    test_fuel()
def test_fuel():
    assert convert("1/2")==50
    assert convert("3/4")==75
    assert convert("1/5")==20
def test_gauge():
    assert gauge(1)=="E"
    assert gauge(99)=="F"
main()