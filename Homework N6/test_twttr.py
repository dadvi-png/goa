from twttr import shorten

def main():
    test_twttr()
    test_number()
    test_symbol()
def test_twttr():
    assert shorten("George")=="Grg"
    assert shorten("Nino")=="Nn"
    assert shorten("Davit")=="Dvt"
def test_number():
    assert shorten("Giorgi123")=="Grg123"
def test_symbol():
    assert shorten("@Giorgi@")=="@Grg@"
main()