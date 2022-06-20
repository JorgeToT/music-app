import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const GradientLayout = (props) => {
  const color = props.color || "blue";
  return (
    <Box
      height={"100%"}
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            objectFit="cover"
            boxShadow={"2xl"}
            src={props.image}
            borderRadius={props.roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding={"20px"} color={"white"}>
          <Text fontSize="x-small" fontWeight="bold" casing={"uppercase"}>
            {props.subtitle}
          </Text>
          <Text fontSize={"6xl"} height={"100%"}>
            {props.title}
          </Text>
          <Text fontSize={"x-small"}>{props.description}</Text>
        </Box>
      </Flex>
      <Box paddingY="50px">
        {props.children}
      </Box>
    </Box>
  );
};

export default GradientLayout;
