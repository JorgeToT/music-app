import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useMe } from "../lib/hooks";

const Home = ({ artists }) => {
  const { user, isLoading } = useMe();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <GradientLayout
      color="blue"
      subtitle="profile"
      title={`${user.firstName} ${user.lastName}`}
      description={user.playlistsCount + " public playlist"}
      image="https://i.pinimg.com/originals/18/5a/9f/185a9f9e4e7bdda36721c607a2555869.jpg"
      roundImage={true}
    >
      <Box color={"white"} paddingX="40px">
        <Box marginBottom={"40px"} marginLeft="10px">
          <Text fontSize={"2xl"} fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize={"md"}>Only visible for you</Text>
        </Box>
        <Flex overflowX={"auto"}>
          {artists.map((artist) => (
            <Box paddingX="10px" minWidth="200px" maxWidth={"250px"} key={artist.id}>
              <Box
                bg="gray.900"
                borderRadius="4px"
                paddingY="30px"
                paddingX="20px"
                width="100%"
              >
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize={"large"}>{artist.name}</Text>
                  <Text fontSize={"x-small"}>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async (req) => {
  const artists = await prisma.artist.findMany({});

  return {
    props: {
      artists,
    },
  };
};

export default Home;
