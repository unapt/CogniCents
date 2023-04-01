from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
import requests
import json

app = FastAPI()


class Data(BaseModel):
    message: str

@app.get("/")
async def root():
    return {"message": "Hello World"}

#LITERACY FUNCTIONS

@app.post("/summerize")
async def summerize(data: Data):
    """
    returns a summerization of message that is provided
    """
    print(data.message)
    summarizer = pipeline(
        "summarization", model="philschmid/bart-large-cnn-samsum")
    
    return summarizer(data.message)

#CAPITAL ONE TRANSFER FUNCTIONS

access_token = 'efb0257be8149ced78cda81ac90aed35'
payer_id = '64288d889683f20dd5184181'
payee_id = '6428897e9683f20dd518417e'

#test transfer ONLY
transfer_amount = 50000

api_endpoint = f'http://api.nessieisreal.com/accounts/{payer_id}/transfers?key={access_token}'

# Set the headers for the API request
headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json'
}

# Set the JSON payload for the API request
payload = {
    'medium': 'balance',
    'payee_id': payee_id,
    'transaction_date': '2023-04-01',
    'status': 'pending',
    'description': 'Demo transfer',
    'amount': transfer_amount
}

# Send the API request
response = requests.post(api_endpoint, headers=headers, data=json.dumps(payload))

# Print the response from the API
print(response.text)

