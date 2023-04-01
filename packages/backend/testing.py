from transformers import AutoTokenizer, AutoModelForTokenClassification
from transformers import pipeline



def token_classifier():
    """
    returns a summerization of message that is provided
    """
    tokenizer = AutoTokenizer.from_pretrained("Davlan/distilbert-base-multilingual-cased-ner-hrl")
    model = AutoModelForTokenClassification.from_pretrained("Davlan/distilbert-base-multilingual-cased-ner-hrl")
    nlp = pipeline("ner", model=model, tokenizer=tokenizer)
    example = "Nader Jokhadar had given Syria the lead with a well-struck header in the seventh minute."
    ner_results = nlp(example)
    return ner_results

print(token_classifier())