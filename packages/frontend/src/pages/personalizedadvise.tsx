// import {
//     Box,
//     Divider,
//     Heading,
//     VStack,
//     Button,
//     useColorModeValue,
//   } from "@chakra-ui/react";
//   import Link from "next/link";
//   import { SideBar } from "../components/SideBar";
//   import API from "../components/API";
  
//   const PersonalizedAdvise = () => {
//     const bg = useColorModeValue("gray.50", "gray.800");
//     const color = useColorModeValue("gray.700", "gray.200");
  
//     return (
//       <>
//         <SideBar>
//           <Box as="main" textAlign="center" py={10} bg={bg} color={color}>
//             <Heading as="h1" size="2xl" mb={10}>
//               Customize Your Personal Finances with AI
//             </Heading>
//             <Divider mb={5} />
//             <VStack spacing={4} maxWidth="400px" margin="0 auto">
//               <Heading as="h2" size="xl" mb={5}>
//                 CogniVest
//               </Heading>
//               <API />
//             </VStack>
//           </Box>
//         </SideBar>
//       </>
//     );
//   };
  
//   export default PersonalizedAdvise;
import {
    Box,
    Divider,
    Heading,
    VStack,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import { SideBar } from "../components/SideBar";
  import API from "../components/API";
  
  const PersonalizedAdvise = () => {
    const bg = useColorModeValue("gray.50", "gray.800");
    const color = useColorModeValue("gray.700", "gray.200");
  
    return (
      <>
        <SideBar>
          <Box as="main" py={10} px={5} bg={bg} color={color}>
            <Heading as="h1" size="2xl" mb={10}>
              Customize Your Personal Finances with AI
            </Heading>
            <Divider mb={5} />
            <VStack spacing={4} maxWidth="400px">
              <API />
            </VStack>
          </Box>
        </SideBar>
      </>
    );
  };
  
  export default PersonalizedAdvise;