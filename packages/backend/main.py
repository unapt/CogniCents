from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
import requests
import os

app = FastAPI()


class Data(BaseModel):
    message: str


@app.get("/")
async def root():
    return {"message": "Hello World"}

# LITERACY FUNCTIONS


@app.post("/summerize")
async def summerize(data: Data):
    """
    returns a summerization of message that is provided
    """
    print(data.message)
    summarizer = pipeline(
        "summarization", model="philschmid/bart-large-cnn-samsum")

    return summarizer(data.message)


# ASSISTIVE FUNCTIONS


# PERSONALIZED FUNCTIONS
