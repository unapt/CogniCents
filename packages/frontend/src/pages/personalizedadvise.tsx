import { Card, CardBody, Divider, Heading, HStack, Stack, Image, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../styles/inputpage.module.css'
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";
import API from "../components/API";


const PersonalizedAdvise = () => (
    <>
        <SideBar>
            <Heading color="gray.500" margin={5}>
                Customize Your Personal Finances with AI
            </Heading>
            <Divider />
            <br />
            <div className="App">
            <header className="App-header" style={{ width: "100%" }}>
                <h1 style={{ fontSize: 70, marginTop: "2rem" }}>
                <b>CogniVest</b>
                </h1>
                <API />
            </header>
            </div>
            <div className={styles.body}>
                <div className={styles.welcomeBox}>
                    <div className={styles.welcomeMessage}>Access your customized assistants:</div>
                    <div className={styles.buttons}>
                        <Link href='/test'>
                            <Button variant='solid' width="full" height="20" colorScheme='green'>
                                CogniVest AI
                            </Button>
                        </Link >
                        <br />
                        <Link href='/form'>
                            <Button variant='solid' width="full" height="20" colorScheme='yellow'>
                                CogniCents AI
                            </Button>
                        </Link >
                    </div>
                </div>
            </div>
        </SideBar>
    </>
);

export default PersonalizedAdvise;
