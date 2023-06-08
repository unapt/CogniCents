# CogniCents 
### Making finance digestible for retail...

<p float="left">
  <img src="https://github.com/unapt/CogniCents/assets/64095665/abfc76bf-3d6a-48af-8f26-b028650739ad" width="200" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/78ada4dd-c584-4c9b-ac02-f31bde149d42" width="200" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/5628380e-a9a6-4f2a-9e7d-8014da1c0095" width="200" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/fd5c794c-6ade-4722-9458-268788958710" width="200" />
</p>


CogniCents is a multifaceted financial web service designed to provide the customer with enhanced financial literacy and expertise

#### 10-Q Report Processor: 
- Consumes user-inputted 10-Q reports and uses deep learning LLMs to perform summative analysis.
- Fetches real-time published major reports each day to perform a similar analysis.

#### Equity Research Analyzer:
- Generates real-time graphical data visualizations of stock pricings for user-inputted stock tickers.
- Real-time finance articles from Fidelity API to keep users up-to-date with potential investment opportunities.
- Sentiment analysis of journal content to give user overal feel of market trends.

#### Personalized Budgeting:
- Interactive user entry feature to enable users to keep track of their budgeting plans.
- Graphical display of budgeting and goals.
- Personalized tips to assist with saving and retirement goals.

#### Decentralized Finances:
- Proof-of-concept info page providing users with details on Crypto investing
- Backend integration of Verbwire API (https://www.verbwire.com/)

#### Extra Financial Resources:
- Additionaly financial resourses, information, and references to assist user in enancing their financial literacy.

# Set up

Install dependencies (you might have to run this command in both the frontend and backend)

```bash
yarn install
```

Then you can run the frontend with:

```bash
yarn workspace frontend dev
```

Then you can run the backend on a different terminal instance:

```bash
yarn workspace backend dev
```


#### Note: API keys have been revoked from public view. If you would like access to full AI functionality, please mention and make a PR.
