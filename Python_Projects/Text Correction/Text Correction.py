from textblob import TextBlob

def correct_sentence(sentence):
    blob = TextBlob(sentence)
    corrected_word = str(blob.correct())
    return corrected_word

sentence = input("Enter Your sentence: ")
corrected_word = correct_sentence(sentence)
print(f"Corrected Sentence: {corrected_word}")

