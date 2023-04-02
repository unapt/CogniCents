import openai
import os
from dotenv import load_dotenv
from pathlib import Path
from sec_api import ExtractorApi
from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
import requests

dotenv_path = Path('..\HackPrinceton\.env')
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
secapikey = os.getenv("SEC-API-KEY")
extractorApi = ExtractorApi(secapikey)


def tenq():
    # 10-Q example
    url_10q = "https://www.sec.gov/Archives/edgar/data/1318605/000095017022006034/tsla-20220331.htm"

    part2_item_1A_text = extractorApi.get_section(
        url_10q, "part2item1a", "text")
    return part2_item_1A_text


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


def getSummary(wholeFiling):
    filing = wholeFiling
    totalSummary = ""

    while (len(filing) > (4*4090)):
        info = (filing[:(4*4090)]) if len(filing) > 75 else filing
        filing = filing[(4090*4):]
        totalSummary = totalSummary + summarizePart(info)

    if (len(filing) > 0):
        totalSummary = totalSummary + summarizePart(filing)
    return totalSummary


def getArticleTitle(message):
    gpt_prompt = f"""Your job is to title this article that 
    is provided to you.
    """
    info = message
    if (len(message) > (4*4090)):
        info = (message[:(4*4090)])

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": gpt_prompt},
                  {"role": "user", "content": info}
                  ]
    )

    return (str(completion['choices'][0]['message']['content']))


def determineCompany(context):
    question_answerer = pipeline(
        "question-answering", model='distilbert-base-cased-distilled-squad')

    return (question_answerer(question="What company is this paragraph refering to?", context=context))
