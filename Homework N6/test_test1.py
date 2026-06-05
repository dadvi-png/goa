from test1 import convert, gauge

def main():
    test_convert()
    test_gauge()

def test_convert():
    assert convert("1/2")==50
    assert convert("3/4")==75
def test_gauge():
    assert gauge(1)=="E"
    assert gauge(99)=="F"
main()

