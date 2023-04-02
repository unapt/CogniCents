import { Card, CardBody, Divider, Heading, HStack, Stack, Image, Text, Textarea, InputLeftAddon, Input, InputGroup, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import styles from '../styles/inputpage.module.css'
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";

const CapOnePayment = () => (
    <>
      <SideBar>
        <Heading color="gray.500" margin={5}>
          Make a Donation to CogniCents via Capital One Secure Payments method
        </Heading>
        <Divider />
        <br />
        <div className="App">
          <header className="App-header" style={{ width: "100%" }}>
            <h1 style={{ fontSize: 70, marginTop: "2rem" }}>
              <b>Capital One Secure Transfer Method</b>
            </h1>
          </header>
        </div>
        <div className={styles.body}>
          <div className={styles.welcomeBox}>
            <div className={styles.welcomeMessage}>Select a donation amount:</div>
            <div className={styles.buttons}>
              <Button variant="solid" width="full" height="20" colorScheme="blue" onClick={() => alert('$20')}>
                $20
              </Button>
              <br />
              <Button variant="solid" width="full" height="20" colorScheme="green" onClick={() => alert('$50')}>
                $50
              </Button>
              <br />
              <Button variant="solid" width="full" height="20" colorScheme="orange" onClick={() => alert('$500')}>
                $500
              </Button>
              <br />
              <Button variant="solid" width="full" height="20" colorScheme="red" onClick={() => alert('$1000')}>
                $1000
              </Button>
              <br />
              <Text fontSize="md" mt={4}>
                Or enter a custom amount:
              </Text>
              <InputGroup mt={2}>
                <InputLeftAddon children="$" />
                <Input placeholder="Custom amount" />
              </InputGroup>
              <br />
              <Button variant="solid" width="full" height="20" colorScheme="teal" onClick={() => alert('Donate')}>
                Donate
              </Button>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );

export default CapOnePayment;
