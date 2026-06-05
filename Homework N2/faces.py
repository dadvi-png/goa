def convert(Emoji):
    text = Emoji.replace("):","😞").replace("(:","🙂")
    return text
def main():
    Mood=input("input:")
    Answer=(convert(Mood))
    print(Answer)
main()