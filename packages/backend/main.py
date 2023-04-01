from fastapi import FastAPI
from transformers import pipeline
import requests

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

#LITERACY FUNCTIONS

@app.get("/summerize")
async def summerize(data: Data):
    """
    returns a summerization of message that is provided
    """
    
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

    return summarizer(data.message, max_length=200, min_length=50, do_sample=False)



#ASSISTIVE FUNCTIONS






#PERSONALIZED FUNCTIONS

