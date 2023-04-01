import { Card, CardBody, Container, Link, Divider, Heading, HStack, Stack, Image, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";

const Home = () => (
    <>
        <Container>
            <Heading margin={5}>
                CogniCents Artificial Intelligence
            </Heading>
            <Divider />
            <br />
            <VStack>
                <HStack>
                    <Card maxW='sm'>
                        <CardBody>
                            <Stack mt='1' spacing='3'>
                                <Heading size='md'><Center>Literacy Tools</Center></Heading>
                                <Text>
                                    Understand the complexities of finance without actually having to Understand
                                    the complexities of finance. Use these tools to gain the confidence you need
                                    to make informed financial decisions.
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link href='/literacy' width="full">
                                <Button variant='solid' width="full" colorScheme='blue'>
                                    Explore
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody>
                            <Stack mt='1' spacing='3'>
                                <Heading size='md'><Center>Assistive Tools</Center></Heading>
                                <Text>
                                    Automate your financial processes with our assistive automation tools.
                                    expense tracking, and spending analysis features. Quickly identify
                                    potential opportunities to avoid unnecessary time lost doing your finances.
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link href='/assistive' width="full">
                                <Button variant='solid' width="full" colorScheme='blue'>
                                    Explore
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </HStack>
                <Card maxW='full'>
                    <CardBody>
                        <Stack mt='1' spacing='3'>
                            <Heading size='md'><Center>CogniVest AI</Center></Heading>
                            <Text>
                                Get customized financial and investment guidance based on your unique financial situation, goals,
                                and preferences. Our machine learning algorithms analyze your financial data and real-time market trends to
                                provide personalized recommendations on how to invest and improve your financial well-being.
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link href='/personalizedadvise' width="full">
                            <Button variant='solid' width="full" colorScheme='blue'>
                                Explores
                            </Button>
                        </Link >
                    </CardFooter>
                </Card>
            </VStack>

        </Container>
    </>
);

export default Home;
