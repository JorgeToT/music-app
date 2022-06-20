import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import NextImage from "next/image";

const AuthForm: FC<{ mode: "signin" | "signup"; text: string }> = ({
  mode,
  text,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height={"100vh"} width={"100vw"} bg={"black"} color={"white"}>
      <Flex
        justify={"center"}
        align={"center"}
        height={"100px"}
        borderBottom="1px solid white"
      >
        <NextImage src="/logo.svg" alt="logo" width="120px" height="60px" />
      </Flex>
      <Flex justify={"center"} align={"center"} height={"calc(100vh - 100px)"}>
        <Box padding={"40px"} bg={"gray.900"} borderRadius="6px" lineHeight={"50px"}>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                ":hover": {
                  bg: "green.400",
                },
              }}
            >
              {text}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
