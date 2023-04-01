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



def summerize(data):
    """
    returns a summerization of message that is provided
    """
    
    summarizer = pipeline(
        "summarization", model="philschmid/bart-large-cnn-samsum")

    return summarizer(data)

print(summerize(" Flan-PaLM 540B achieves state-of-the-art performance on several benchmarks, such as 75.2% on five-shot MMLU. We also publicly release Flan-T5 checkpoints,1 which achieve strong few-shot performance even compared to much larger models, such as PaLM 62B. Overall, instruction finetuning is a general method for improving the performance and usability of pretrained language models"))