// import Head from "next/head";
// import { useRouter } from "next/router";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   Heading,
// } from "@chakra-ui/react";
// import { SideBar } from "../../components/SideBar";

// export default function Form() {
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       housingExpenses: event.target.housingExpenses.value,
//       healthExpenses: event.target.healthExpenses.value,
//       entertainmentExpenses: event.target.entertainmentExpenses.value,
//       savingsExpenses: event.target.savingsExpenses.value,
//       miscellaneousExpenses: event.target.miscellaneousExpenses.value,
//     };
//     router.push({
//       pathname: "/form/results",
//       query: { q: JSON.stringify(data) },
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <SideBar>
//         <Box as="main" textAlign="center" py={10}>
//           <Heading as="h1" size="2xl" mb={10}>
//             Enter your information
//           </Heading>
//           <form onSubmit={handleSubmit}>
//             <VStack spacing={4} maxWidth="400px" margin="0 auto">
//               <FormControl isRequired>
//                 <FormLabel>Monthly housing expenses:</FormLabel>
//                 <Input
//                   name="housingExpenses"
//                   type="number"
//                   placeholder="$ Your monthly housing expenses"
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel>Monthly health expenses:</FormLabel>
//                 <Input
//                   name="healthExpenses"
//                   type="number"
//                   placeholder="$ Your monthly health expenses"
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel>Monthly entertainment expenses:</FormLabel>
//                 <Input
//                   name="entertainmentExpenses"
//                   type="number"
//                   placeholder="$ Your monthly entertainment expenses"
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel>Monthly savings:</FormLabel>
//                 <Input
//                   name="savingsExpenses"
//                   type="number"
//                   placeholder="$ Your monthly savings"
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormLabel>Monthly miscellaneous expenses:</FormLabel>
//                 <Input
//                   name="miscellaneousExpenses"
//                   type="number"
//                   placeholder="$ Miscellaneous expenses"
//                 />
//               </FormControl>

//               <Button type="submit" colorScheme="teal" width="100%">
//                 Submit
//               </Button>
//             </VStack>
//           </form>
//         </Box>
//       </SideBar>
//     </>
//   );
// }

import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { SideBar } from "../../components/SideBar";

export default function Budgeting() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      housingExpenses: event.target.housingExpenses.value,
      healthExpenses: event.target.healthExpenses.value,
      entertainmentExpenses: event.target.entertainmentExpenses.value,
      savingsExpenses: event.target.savingsExpenses.value,
      miscellaneousExpenses: event.target.miscellaneousExpenses.value,
    };
    router.push({
      pathname: "/form/results",
      query: { q: JSON.stringify(data) },
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar bg="teal.500">
        <Box as="main" textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={10}>
            Enter your information
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} maxWidth="400px" margin="0 auto">
            <FormControl isRequired>
                <FormLabel>Monthly savings:</FormLabel>
                <Input
                  name="savingsExpenses"
                  type="number"
                  placeholder="$ Your monthly savings"
                  backgroundColor='#EDEDED'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Monthly housing expenses:</FormLabel>
                <Input
                  name="housingExpenses"
                  type="number"
                  placeholder="$ Your monthly housing expenses"
                  backgroundColor='#EDEDED'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Monthly health expenses:</FormLabel>
                <Input
                  name="healthExpenses"
                  type="number"
                  placeholder="$ Your monthly health expenses"
                  backgroundColor='#EDEDED'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Monthly entertainment expenses:</FormLabel>
                <Input
                  name="entertainmentExpenses"
                  type="number"
                  placeholder="$ Your monthly entertainment expenses"
                  backgroundColor='#EDEDED'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Monthly miscellaneous expenses:</FormLabel>
                <Input
                  name="miscellaneousExpenses"
                  type="number"
                  placeholder="$ Miscellaneous expenses"
                  backgroundColor='#EDEDED'
                />
              </FormControl>

              <Button type="submit" bg="black" color="white" width="100%" _hover={{
                                bg: '#66D489',
                                color: 'white',
                            }}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </SideBar>
    </>
  );
}
