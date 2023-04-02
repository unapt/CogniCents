import { Box, Card, CardBody, Divider, Heading, HStack, Stack, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../styles/inputpage.module.css'
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";
import API from "../components/API";
import blockchain from '../../public/blockchain.jpg';
import web3 from '../../public/web3.jpg';

import Image from 'next/image';



const PersonalizedAdvise = () => (
    <>
        <SideBar>
            <Heading margin={5}>
                CogniCrypto: Simplifying the Tech Behind Cryptocurrencies
            </Heading>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={blockchain} alt="blockchain" width={1000} height={1000} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={web3} alt="web3" width={1000} height={1000} />
            </div>
            {/*
            <Text margin={5} style={{ fontSize: 24, marginTop: "2rem", marginLeft: "25rem"}}>
                What is Web3?
            </Text>
            <Text margin={5}>
            Web3 refers to the next generation of the internet being built on blockchain technology.

            Web3 is envisioned as a more secure, transparent, and decentralized internet, where 
            individuals can have more control over their personal data and online identities. It aims 
            to overcome some of the limitations and drawbacks of the current Web 2.0, which is dominated 
            by a few large corporations and is often criticized for its lack of privacy, censorship, and 
            centralization.

            Web3 is made possible by several emerging technologies, such as blockchain, decentralized storage, 
            and smart contracts. These technologies allow for the creation of decentralized applications (dApps) 
            that can run on a decentralized network, rather than being controlled by a single entity.
            </Text>*/}
        </SideBar>
    </>
);

export default PersonalizedAdvise;
