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


txt = Path(
    r'C:\Users\joe55\Desktop\HackPrinceton\packages\backend\dailyArticles\txtFileFive.txt').read_text()
txt1 = Path(
    r'C:\Users\joe55\Desktop\HackPrinceton\packages\backend\dailyArticles\txtFileFour.txt').read_text()
txt2 = Path(
    r'C:\Users\joe55\Desktop\HackPrinceton\packages\backend\dailyArticles\txtFileThree.txt').read_text()
txt3 = Path(
    r'C:\Users\joe55\Desktop\HackPrinceton\packages\backend\dailyArticles\txtFileTwo.txt').read_text()
txt4 = Path(
    r'C:\Users\joe55\Desktop\HackPrinceton\packages\backend\dailyArticles\txtFileOne.txt').read_text()

allFiles = [txt, txt1, txt2, txt3, txt4]


def getSummary(filing):
    totalSummary = ""
    for file in allFiles:
        while (len(filing) > (4*4090)):
            info = (filing[:(4*4090)]) if len(filing) > 75 else filing
            filing = filing[(4090*4):]
            totalSummary = totalSummary + summarizePart(info)

        if (len(filing) > 0):
            totalSummary = totalSummary + summarizePart(filing)

    return totalSummary


@app.post("/getSummary")
def getAllSummarys(fileLoc):
    one = getSummary(str(fileLoc))
    # titleone = getArticleTitle(one)
    # compone = determineCompany(one)

    # summary_dict = {"summary": {one},
    #                "teaser": {titleone},
    #                "company": {compone}
    #                }
    # summary_json = json.dumps(summary_dict)
    return one


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
