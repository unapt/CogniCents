# CogniCents 
### Making finance digestible for retail...

A multifaceted AI-driven solution created to equip everyday users with financial proficiency and market expertise.

## Product Features

<div align="center">
  <img src="https://github.com/unapt/CogniCents/assets/64095665/13d6dd71-dc38-4aa5-abac-4fd715a33158" height="180" width="240" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/7330600a-66d0-4bc2-8709-650b7a51d2ee" height="180" width="290" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/c75db1df-f217-4ed2-b7c3-fe48eb8d2d3b" height="180" width="290" />
</div>

<div align="center">
  <img src="https://github.com/unapt/CogniCents/assets/64095665/89efd6fc-76aa-4cd8-b734-019f7f425339" height="180" width="290" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/50a0f310-49c9-4064-8b48-fb026e3d4d66" height="180" width="240" />
  <img src="https://github.com/unapt/CogniCents/assets/64095665/1055a643-980d-4848-9c5b-9c28acd39da1" height="180" width="290" />
</div>

#### 10-Q Report Processor: 
- Consumes user-inputted 10-Q reports and uses AWS Sagemaker and DistillBERT LLMs to perform summative analysis.
- Fetches real-time published major reports each day to perform a similar analysis.

#### Equity Research Analyzer:
- Generates real-time graphical data visualizations of stock pricings for user-inputted stock tickers.
- Real-time finance articles from Fidelity API to keep users up-to-date with potential investment opportunities.
- AI Sentiment analysis of journal content to give user overal feel of market trends.

#### Personalized Budgeting:
- Interactive user entry feature to enable users to keep track of their budgeting plans.
- Graphical display of budgeting and goals.
- Personalized tips to assist with saving and retirement goals.

#### Decentralized Finances:
- Proof-of-concept info page providing users with details on Crypto investing
- Backend integration of Verbwire API smart contracts (https://www.verbwire.com/)

#### Extra Financial Resources:
- Additional financial resourses, information, and references to assist user in enancing their financial literacy.

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


#### Note: API keys have been revoked from public view. To access full AI functionality, please make a PR.
