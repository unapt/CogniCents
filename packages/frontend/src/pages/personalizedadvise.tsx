import { Card, CardBody, Divider, Heading, HStack, Stack, Image, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";

const PersonalizedAdvise = () => (
    <>
        <SideBar>
            <Heading margin={5}>
                CogniVest AI
            </Heading>
            <Heading color="gray.500" margin={5}>
                Your Personalized AI Investing Assistant
            </Heading>
            <Divider />
            <br />
        </SideBar>
    </>
);

export default PersonalizedAdvise;
