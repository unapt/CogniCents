import { Card, CardBody, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Heading, HStack, Stack, Image, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack, AspectRatio, Box, Input } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";

const Assistive = () => (
    <>
        <SideBar>
            <Heading margin={5}>
                Financial Literacy Intelligence
            </Heading>
            <Divider />
            <br />
            <p>DESCRIPTION PARAGRAPH HERE</p>
            <br />
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab>DocuQuerry</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <AspectRatio width="64" ratio={1}>
                            <Box
                                borderColor="gray.300"
                                borderStyle="dashed"
                                borderWidth="2px"
                                rounded="md"
                                shadow="sm"
                                role="group"
                                transition="all 150ms ease-in-out"
                                _hover={{
                                    shadow: "md"
                                }}
                            >
                                <Box position="relative" height="100%" width="100%">
                                    <Box
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        height="100%"
                                        width="100%"
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <Stack
                                            height="100%"
                                            width="100%"
                                            display="flex"
                                            alignItems="center"
                                            justify="center"
                                            spacing="4"
                                        >
                                            <Stack p="8" textAlign="center" spacing="1">
                                                <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                                    Drop images here
                                                </Heading>
                                                <Text fontWeight="light">or click to upload</Text>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept="image/*"
                                    />
                                </Box>
                            </Box>
                        </AspectRatio>
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
