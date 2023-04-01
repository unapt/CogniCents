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

# If the transfer was successful, update the account balances
if response.status_code == 201:
    # Get the account information for the payer account
    payer_endpoint = f'http://api.nessieisreal.com/accounts/{payer_id}?key={access_token}'
    payer_response = requests.get(payer_endpoint)
    payer_account = payer_response.json()

    # Subtract the transfer amount from the payer's balance
    payer_balance = payer_account['balance']
    payer_balance -= transfer_amount

    # Update the payer's balance on the Capital One API
    payer_update_payload = {
        'balance': payer_balance
    }
    payer_update_response = requests.put(payer_endpoint, headers=headers, data=json.dumps(payer_update_payload))
    print(f'Payer balance updated to: ${payer_balance:.2f}')

    # Get the account information for the payee account
    payee_endpoint = f'http://api.nessieisreal.com/accounts/{payee_id}?key={access_token}'
    payee_response = requests.get(payee_endpoint)
    payee_account = payee_response.json()

    # Add the transfer amount to the payee's balance
    payee_balance = payee_account['balance']
    payee_balance += transfer_amount

    # Update the payee's balance on the Capital One API
    payee_update_payload = {
        'balance': payee_balance
    }
    payee_update_response = requests.put(payee_endpoint, headers=headers, data=json.dumps(payee_update_payload))
    print(f'Payee balance updated to: ${payee_balance:.2f}')
else:
    print(f'Transfer failed with error code: {response.status_code}')

