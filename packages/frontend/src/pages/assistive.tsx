import { Card, CardBody, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Heading, HStack, Stack, Image, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";

const Assistive = () => (
    <>
        <SideBar>
            <Heading margin={5}>
                Finincial Literacy Intelligence
            </Heading>
            <Divider />
            <br />
            <p>DESCRIPTION PARAGRAPH HERE</p>
            <br />
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab>Summerize</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>area</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </SideBar>
    </>
);

export default Assistive;
