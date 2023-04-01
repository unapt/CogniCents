import openai
import os
from dotenv import load_dotenv
from pathlib import Path
from sec_api import ExtractorApi

dotenv_path = Path('..\HackPrinceton\.env')
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
secapikey = os.getenv("SEC-API-KEY")
extractorApi = ExtractorApi(secapikey)


def tenq():
    # 10-Q example
    url_10q = "https://www.sec.gov/Archives/edgar/data/1318605/000095017022006034/tsla-20220331.htm"

    part2_item_1A_text = extractorApi.get_section(url_10q, "part2item1a", "text")
    return part2_item_1A_text

def getSummary(filing):

    gpt_prompt = f"""Your job is to summerize the following information. 
    The information is a 10q for some company that was filed to the sec. 
    You need to dumb it down and make it easy for the average person to 
    understand. Please indicate the most importand information for investment
    related concepts. Please summerize this in 3 paragraphs.
    """

    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo", 
    messages = [{"role": "system", "content" : "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-03-02"},
    {"role": "user", "content" : "How are you?"},
    {"role": "assistant", "content" : "I am doing well"},
    {"role": "user", "content" : "What is the mission of the company OpenAI?"}]
    )
    #print(completion)
    print(completion)


    # conversation=[
    #     {"role": "system", "content": gpt_prompt},
    #     {"role": "user", "content": filing},
    # ]
    # conversation=[
    #     {"role": "system", "content": gpt_prompt}
    # ]
    # conversation.append({"role": "user", "content": filing})
    # response = openai.ChatCompletion.create(
    #     engine="gpt-3.5-turbo",
    #     messages=conversation,
    #     max_tokens=4090,
    #     temperature=0.5, #A low temperature (near 0) is going to give very well-defined answers consistently while a higher number (near 1) will be more creative in its responses
    #     top_p=1.0
    # )

    
    #return(response['choices'][0]['message']['content'])
    #return(response)

# filing = tenq()
# if(len(filing) > (4*4090)):
#     info = (filing[:(4*4090)]) if len(filing) > 75 else filing
#     print(getSummary(str(info)))
# else:
#     print(getSummary(filing))



getSummary()