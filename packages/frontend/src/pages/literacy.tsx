import { Card, CardBody, Tabs, Textarea, Text, TabList, TabPanels, Tab, TabPanel, Divider, Heading, HStack, Stack, Image, CardFooter, ButtonGroup, Button, Center, VStack, SimpleGrid, Skeleton, Box } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";
import { useState } from "react";
import { TenqCard } from "../components/TenQCard";
import { SkeletonLoader } from "../components/SkeletonLoader";




const Literacy = () => {

    // code for calling backend
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("")
    const [data, setData] = useState()
    const [articlesLoading, setArticlesLoading] = useState(false)
    const articles = () = [
        'https://www.sec.gov/Archives/edgar/data/1866633/000186663323000017/0001866633-23-000017-index.htm',
        'https://www.sec.gov/Archives/edgar/data/1819516/000181951623000022/0001819516-23-000022-index.htm',
        'https://www.sec.gov/Archives/edgar/data/1836875/000183687523000064/0001836875-23-000064-index.htm',
        'https://www.sec.gov/Archives/edgar/data/1275187/000162828023010093/0001628280-23-010093-index.htm',
        'https://www.sec.gov/Archives/edgar/data/894556/000168316823002036/0001683168-23-002036-index.htm'
    ]
    function findDailyTenQs() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        };

        setArticlesLoading(true)
        fetch("api/getSummary", requestOptions)
            .then((res) => res.json())
            .then((data) => setAnswer(data[0].articles))
            .catch((err) => {
                alert(err)
            })
            .finally(() => setArticlesLoading(false))

    }

    const [answer, setAnswer] = useState("")

    function handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        };

        setAnswer("")

        setLoading(true)
        fetch("api/summerize", requestOptions)
            .then((res) => res.json())
            .then((data) => setAnswer(data[0].summary_text))
            .catch((err) => {
                alert(err)
            })
            .finally(() => setLoading(false))
    }

    let len = 6;

    return (
        <>
            <SideBar>
                <Heading margin={5} onLoad={event => findDailyTenQs()}>
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
                            <Textarea placeholder='Paste a jargon paragraph here...' backgroundColor='#EDEDED' onChange={event => setText(event.currentTarget.value)} />
                            <Button isLoading={loading} margin={5} color="green.400" _hover={{
                                bg: '#66D489',
                                color: 'white',
                            }} variant="outline" onClick={handleSubmit}>Submit</Button>

                            {answer ? <><Heading>Answer: </Heading>
                                <Text>{answer}</Text></> : null}
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid columns={2} spacing={10}>
                                <SkeletonLoader loading={articlesLoading} />
                                <SkeletonLoader loading={articlesLoading} />
                                <SkeletonLoader loading={articlesLoading} />
                                <SkeletonLoader loading={articlesLoading} />
                                <SkeletonLoader loading={articlesLoading} />
                                <SkeletonLoader loading={articlesLoading} />

                                {data?.data.map((item, i) => (
                                    <TenqCard
                                        key={i}
                                        title="hell0"
                                        intro="sooogoood"
                                        link="hello" />



                                ))
                                }
                            </SimpleGrid>

                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </SideBar>
        </>
    );
}

export default Literacy;
