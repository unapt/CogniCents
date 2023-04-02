

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
  Spacer,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import theme from '../theme'
import Image from "next/image"
import result from "../../public/result.png"
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import Row from "react-bootstrap/esm/Row";

const Index = () => (
  <Container height="100vh" backgroundColor={theme.colors.white}>
    <Hero />
    <Button
      size='md'
      height='60px'
      width='230px'
      border='2px'
      borderColor='green.500'
      as="a" href="/literacy"
      _hover={{
        bg: '#66D489',
        color: 'white',
      }}>
      Explore Financial Freedom
    </Button>
    <DarkModeSwitch />
    <Image src={result} alt="coinstack art" width="600" height="800" />





  </Container>
);

export default Index;
