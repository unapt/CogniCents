// import { Flex, Heading } from "@chakra-ui/react";

// export const Hero = ({ title }: { title: string }) => (
//   <Flex
//     justifyContent="center"
//     alignItems="center"
//     height="100vh"
//     bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
//     bgClip="text"
//   >
//     <Heading fontSize="6vw">{title}</Heading>
//   </Flex>
// );

// Hero.defaultProps = {
//   title: "Cognicents",
// };

// import { Flex, Heading } from "@chakra-ui/react";
// import { css } from "@emotion/react";

// const titleGradient = css`
//   background-image: linear-gradient(to left, green.500, white);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// export const Hero = ({ title }: { title: string }) => (
//   <Flex justifyContent="center" alignItems="center" height="100vh">
//     <Heading fontSize="6vw" css={titleGradient}>
//       {title}
//     </Heading>
//   </Flex>
// );

// Hero.defaultProps = {
//   title: "Cognicents",
// };
import { Flex, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";

const titleGradient = css`
  background-image: linear-gradient(to left, #75ABAC, #66D489);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Hero = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" height="75vh">
    <Heading fontSize="10vw" css={titleGradient}>
      {title}
    </Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "CogniCents",
};