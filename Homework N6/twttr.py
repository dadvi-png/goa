def main():
    name=input("name:")
    contracion=shorten(name)
    print(contracion)
def shorten(word):
    short=""
    for x in word:
        if x.lower() not in ["a", "e", "i", "o", "u"]:
            short += x
    return short
if __name__=="__main__":
    main()