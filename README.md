# CogniCents

CogniCents currently has the ability to provide the user with summarization into layman's terms from technical finance jargon. Additionally, it can take in the current 10-Q reports from each day to perform a similar summative analysis. CogniVest can also help the average to hardcore investors stay up-to-date on the latest financial news and trends. It will provide the users with real-time data visualization - providing easy-to-understand graphical representations of market trends for any listed company the user wishes to provide. This allows users to quickly identify patterns and make informed investment decisions. Real-time finance articles from Fidelity API - Keeps users up-to-date with the latest news and events from a reliable source, providing valuable insights into market trends and potential investment opportunities. News Sentiment Analysis scoring is included to provide users with a score that helps them assess market trends and adjust their investment strategies accordingly. This feature is powered by AI and NLP technology, allowing users to access sophisticated analysis tools that can help them make more informed decisions.

Frontend: NextJS, Typescript, Chakra UI

Backend: FastAPI, Python

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

Troubleshooting Errors:

If you are having initial erroring in front-end code, make sure you are using the workspace version of typescript. 
You can check this through command pallete ```CRLT``` + ```SHIFT``` + ```P``` then typing ```Typescript: Select Typescript Version```


#### Note: If you see something that can be improved, please make a PR
