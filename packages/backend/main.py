import openai
import os
from dotenv import load_dotenv
from pathlib import Path
from sec_api import ExtractorApi
from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
import requests
import json


app = FastAPI()

dotenv_path = Path('..\HackPrinceton\.env')
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
secapikey = os.getenv("SEC-API-KEY")
extractorApi = ExtractorApi(secapikey)


class Data(BaseModel):
    message: str


def tenq(url_10q):

    section_text = extractorApi.get_section(url_10q, "part2item1a", "text")

    return section_text


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/summerize")
async def summerize(data: Data):
    """
    returns a summerization of message that is provided
    """
    summarizer = pipeline(
        "summarization", model="philschmid/bart-large-cnn-samsum")

    return summarizer(data.message)


def summarizePart(partFiling):
    gpt_prompt = f"""Your job is to summerize the following information. 
    The information is a 10q for some company that was filed to the sec. 
    You need to dumb it down and make it easy for the average person to 
    understand. Please indicate the most importand information for investment
    related concepts. Please summerize this in 3 paragraphs made up of at least
    three sentences per paragraph.
    """

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": gpt_prompt},
                  {"role": "user", "content": partFiling}
                  ]
    )

    return (str(completion['choices'][0]['message']['content']))


def getSummary(filing):
    totalSummary = ""
    filing = str(filing)
    while (len(str(filing)) > (4*4000)):
        info = (filing[:(4*4000)]) if len(filing) > 75 else filing
        filing = filing[(4000*4):]
        totalSummary = totalSummary + summarizePart(info)

    if (len(filing) > 0):
        totalSummary = totalSummary + summarizePart(filing)

    return totalSummary


@app.post("/getSummary")
def getAllSummarys(fileLoc: Data):

    return getSummary(str(tenq(fileLoc.message)))


@app.post("/getArticleTitle")
def getArticleTitle(message):
    gpt_prompt = f"""Your job is to provide a 4 scentence long teaser about this article that 
    is provided to you.
    """
    info = str(message).strip
    if (len(message) > (3*3500)):
        info = (message[:(3*3500)])

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": gpt_prompt},
                  {"role": "user", "content": info}
                  ]
    )

    return (str(completion['choices'][0]['message']['content']))


@app.post("/determineCompany")
def determineCompany(context):
    question_answerer = pipeline(
        "question-answering", model='distilbert-base-cased-distilled-squad')

    return (question_answerer(question="What company is this paragraph refering to?", context=context))


# ASSISTIVE FUNCTIONS


# PERSONALIZED FUNCTIONS
