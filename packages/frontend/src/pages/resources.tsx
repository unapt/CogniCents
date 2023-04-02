import { Box, Card, CardBody, Divider, Heading, HStack, Stack, Text, Textarea, CardFooter, ButtonGroup, Button, Center, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SideBar";

const PersonalizedAdvise = () => (
  <>
    <SideBar>

      <Heading margin={5}>
        Additional Financial Resources
      </Heading>
      <Divider />
      <Center>
        <Text margin={5} style={{ fontSize: 24, marginTop: "2rem" }}>
          Improve your finances with more resources below:
        </Text>
      </Center>
      <Center>
        <Text margin={5} style={{ textAlign: "center" }}>
          Khan Academy: Khan Academy is a free online education platform that offers courses on a variety of subjects, including personal finance. Their personal finance course covers topics such as budgeting, investing, and retirement planning.{" "}
          <br />
          <br />
          <Link href="https://www.khanacademy.org/economics-finance-domain/core-finance" target="_blank" style={{ color: "#319795" }}>Visit website</Link>
        </Text>
      </Center>
      <Center>
        <Text margin={5} style={{ textAlign: "center" }}>
          Investopedia: Investopedia is a comprehensive resource for financial education and investing. Their website offers articles, tutorials, and videos on personal finance topics such as budgeting, debt management, and investing strategies.{" "}
          <br />
          <br />
          <Link href="https://www.investopedia.com/" target="_blank" style={{ color: "#319795" }}>Visit website</Link>
        </Text>
      </Center>
      <Center>
        <Text margin={5} style={{ textAlign: "center" }}>
          Financial Literacy and Education Commission (FLEC): FLEC is a government organization that aims to improve financial literacy and education in the United States. Their website offers a range of resources on personal finance, including tips on budgeting, saving, and investing.{" "}
          <br />
          <br />
          <Link href="https://www.mymoney.gov/Pages/default.aspx" target="_blank" style={{ color: "#319795" }}>Visit website</Link>
        </Text>
      </Center>
      <Center>
        <Text margin={5} style={{ textAlign: "center" }}>
          Investor.gov: Investor.gov is a government website that provides educational resources on investing, including information on how to avoid fraud and scams, understanding financial statements, and investing basics.{" "}
          <br />
          <br />
          <Link href="https://www.investor.gov/" target="_blank" style={{ color: "#319795" }}>Visit website</Link>
        </Text>
      </Center>
      <Center>
        <Text margin={5} style={{ textAlign: "center" }}>
          Consumer Financial Protection Bureau (CFPB): The CFPB provides information and resources on managing money, credit, and debt, as well as avoiding scams and fraud. Their website also offers tools such as a budgeting worksheet and a credit score simulator.{" "}
          <br />
          <br />
          <Link href="https://www.consumerfinance.gov/" target="_blank" style={{ color: "#319795" }}>Visit website</Link>
        </Text>
      </Center>
    </SideBar>
  </>
);

export default PersonalizedAdvise
