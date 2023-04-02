import { Box, Card, CardBody, Divider, Heading, HStack, Stack, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../styles/inputpage.module.css'
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";
import API from "../components/API";
import sentiments from '../../public/sentiments.png';
import Image from 'next/image';



const PersonalizedAdvise = () => (
    <>
        <SideBar>
            <Heading margin={5}>
                CogniVest in Real-Time with AI
            </Heading>
            <Divider />
            <Text margin={5} style={{ fontSize: 24, marginTop: "2rem", marginLeft: "7rem"}}>
                CogniVest helps investors stay up-to-date on the latest financial news and trends.
            </Text>
            <Text margin={5}>
                Data visuals - Provides easy-to-understand graphical representations of market 
                trends, allowing users to quickly identify patterns and make informed investment 
                decisions.
            </Text>
            <Text margin={5}>
                Real-time finance articles from Fidelity API - Keeps users up-to-date 
                with the latest news and events from a reliable source, providing valuable 
                insights into market trends and potential investment opportunities.
            </Text>
            <Text margin={5}>
                News Sentiment Analysis scoring - Analyzes market sentiment and provides users with 
                a score that helps them assess market trends and adjust their investment strategies 
                accordingly. This feature is powered by AI and NLP technology, allowing users to access 
                sophisticated analysis tools that can help them make more informed decisions.
            </Text>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={sentiments} alt="sentiments" width={500} height={500} />
            </div>
            <Divider />
            {/*<Text color="gray.500" margin={5}>
                CogniVest is a web application that uses AI to help you make better financial decisions. We use your financial data to provide you with personalized financial advice. We also provide you with a personalized financial dashboard that helps you keep track of your finances.
            </Text>*/}
            <div className="App">
                {/* <Heading className="App-header" style={{ width: "100%" }}> */}
                {/*<h1 style={{ fontSize: 70, marginTop: "2rem" }}>
                    <b>CogniVest</b>
                </h1>*/}
                <API />
                {/* </Heading> */}
            </div>

        </SideBar>
    </>
);

export default PersonalizedAdvise;
