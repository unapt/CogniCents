from transformers import AutoTokenizer, AutoModelForTokenClassification, AutoTokenizer, AutoModelForDocumentQuestionAnswering
from transformers import pipeline
import os



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



def summerize(data):
    """
    returns a summerization of message that is provided
    """
    
    summarizer = pipeline(
        "summarization", model="philschmid/bart-large-cnn-samsum")

    return summarizer(data)



def docuquery():
    nlp = pipeline(
        "document-question-answering",
        model="impira/layoutlm-document-qa",
    )

    return nlp(
            "https://templates.invoicehome.com/invoice-template-us-neat-750px.png",
            "What is the invoice number?"
            )



print(docuquery())