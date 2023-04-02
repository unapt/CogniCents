// import {
//   Link as ChakraLink,
//   Text,
//   Code,
//   List,
//   ListIcon,
//   ListItem,
//   Button,
// } from "@chakra-ui/react";
// import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

// import { Hero } from "../components/Hero";
// import { Container } from "../components/Container";
// import { Main } from "../components/Main";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
// import { CTA } from "../components/CTA";
// import { Footer } from "../components/Footer";

// const Index = () => (
//   <Container height="100vh">
//     <Hero />
//     <Main>
//       <Text color="text">
//         Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
//         <Code>TypeScript</Code>.
//       </Text>

//       <List spacing={3} my={0} color="text">
//         <ListItem>
//           <ListIcon as={CheckCircleIcon} color="green.500" />
//           <ChakraLink
//             isExternal
//             href="https://chakra-ui.com"
//             flexGrow={1}
//             mr={2}
//           >
//             Chakra UI <LinkIcon />
//           </ChakraLink>
//         </ListItem>
//         <ListItem>
//           <ListIcon as={CheckCircleIcon} color="green.500" />
//           <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
//             Next.js <LinkIcon />
//           </ChakraLink>
//         </ListItem>
//       </List>
//     </Main>
//     <a href='/literacy'>
//       <Button>
//         To Home
//       </Button>
//     </a>

//     <DarkModeSwitch />
//     <Footer>
//       <Text>Crafted with ❤️ by Joe White, Daniel Unhuryan, Brett Seaton, Melvin He</Text>
//     </Footer>
//     <CTA />
//   </Container>
// );

// export default Index;
// import {
//   Link as ChakraLink,
//   Text,
//   Code,
//   List,
//   ListIcon,
//   ListItem,
//   Button,
// } from "@chakra-ui/react";
// import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

// import { Hero } from "../components/Hero";
// import { Container } from "../components/Container";
// import { Main } from "../components/Main";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
// import { CTA } from "../components/CTA";
// import { Footer } from "../components/Footer";

// const Index = () => (
//   <Container height="100vh">
//     <Hero />
//     <Main>
//       <Text fontSize="xl" fontWeight="bold">
//         Making financial statements digestible for retail.
//       </Text>
//       <Text color="text" mt={4}>
//         Our startup focuses on simplifying financial statements, making them more accessible and understandable for the average retail investor. Through our platform, we provide a user-friendly experience that helps investors make informed decisions based on financial data.
//       </Text>
//     </Main>
//     <Button as="a" href="/literacy" my={4}>
//       Explore Literacy
//     </Button>

//     <DarkModeSwitch />
//     <Footer>
//       <Text>Crafted with ❤️ by Joe White, Daniel Unhuryan, Brett Seaton, Melvin He</Text>
//     </Footer>
//     <CTA />
//   </Container>
// );

// export default Index;
// import {
//   Link as ChakraLink,
//   Text,
//   Code,
//   List,
//   ListIcon,
//   ListItem,
//   Button,
// } from "@chakra-ui/react";
// import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

// import { Hero } from "../components/Hero";
// import { Container } from "../components/Container";
// import { Main } from "../components/Main";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
// import { Footer } from "../components/Footer";

// const Index = () => (
//   <Container height="100vh">
//     <Hero />
//     <Main>
//       <Text fontSize="xl" fontWeight="bold">
//         Making financial statements digestible for retail.
//       </Text>
//       <Text color="text" mt={4}>
//         Our startup focuses on simplifying financial statements, making them more accessible and understandable for the average retail investor. Through our platform, we provide a user-friendly experience that helps investors make informed decisions based on financial data.
//       </Text>
//     </Main>
//     <Button as="a" href="/literacy" my={4}>
//       Explore Literacy
//     </Button>

//     <DarkModeSwitch />
//     <Footer>
//       <Text>Crafted with ❤️ by Joe White, Daniel Unhuryan, Brett Seaton, Melvin He</Text>
//     </Footer>
//   </Container>
// );

// export default Index;
// import {
//   Box,
//   Link as ChakraLink,
//   Text,
//   Code,
//   List,
//   ListIcon,
//   ListItem,
//   Button,
//   Image,
// } from "@chakra-ui/react";
// import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

// import { Hero } from "../components/Hero";
// import { Container } from "../components/Container";
// import { Main } from "../components/Main";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
// import { Footer } from "../components/Footer";

// const Index = () => (
//   <Container height="100vh">
//     <Hero />
//     <Main>
//       <Text fontSize="xl" fontWeight="bold" color="green.500">
//         Making financial statements digestible for retail.
//       </Text>
//       <Text color="text" mt={4}>
//         Our startup focuses on simplifying financial statements, making them more accessible and understandable for the average retail investor. Through our platform, we provide a user-friendly experience that helps investors make informed decisions based on financial data.
//       </Text>
//       <Box mt={4}>
//         <Image src="/moneyHouse.jpg" alt="Saving money" />
//       </Box>
//     </Main>
//     <Button as="a" href="/literacy" my={4}>
//       Explore Literacy
//     </Button>

//     <DarkModeSwitch />
//     <Footer>
//       <Text>Crafted with ❤️ by Joe White, Daniel Unhuryan, Brett Seaton, Melvin He</Text>
//     </Footer>
//   </Container>
// );

// export default Index;

import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Button,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Flex direction="column" h="100%">
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="green.500">
            Making financial statements digestible for retail.
          </Text>
          <Text color="text" mt={4}>
            Our startup focuses on simplifying financial statements, making them more accessible and understandable for the average retail investor. Through our platform, we provide a user-friendly experience that helps investors make informed decisions based on financial data.
          </Text>
        </Box>
        <Spacer />
        <Flex align="flex-end">
          <Box>
            <Image src="/moneyHouse.png" alt="Saving money" />
          </Box>
        </Flex>
      </Flex>
    </Main>
    <Button as="a" href="/literacy" my={4}>
      Explore Literacy
    </Button>

    <DarkModeSwitch />
    <Footer>
      <Text>Crafted with ❤️ by Joe White, Daniel Unhuryan, Brett Seaton, Melvin He</Text>
    </Footer>
  </Container>
);

export default Index;