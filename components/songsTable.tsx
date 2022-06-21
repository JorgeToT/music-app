import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formaTime } from "../lib/formatters";
import { useStoreActions } from "easy-peasy";

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions((store: any) => store.changeActiveSongs);
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0]);
    playSongs(songs);
  };

  return (
    <Box bg="transparent" color={"white"}>
      <Box padding={"10px"} marginBottom="30px">
        <IconButton
          icon={<BsFillPlayFill fontSize={"30px"} />}
          aria-label="play"
          colorScheme="green"
          size="lg"
          isRound
          onClick={() => handlePlay()}
        />
      </Box>
      <Table variant={"unstyled"}>
        <Thead borderBottom={"1px solid"} borderColor="rgba(255,255,255,0.2)">
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Artist</Th>
            <Th>Date added</Th>
            <Th>
              <AiOutlineClockCircle />
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize={"sm"}>
          {songs.map((song: any, i: number) => (
            <Tr
              sx={{
                "&:hover": {
                  bg: "rgba(255,255,255,0.1)",
                },
              }}
              key={song.id}
              cursor="pointer"
              onClick={() => handlePlay(song)}
            >
              <Td>{i + 1}</Td>
              <Td>{song.name}</Td>
              <Td>{song.artist.name}</Td>
              <Td>{formatDate(song.createdAt)}</Td>
              <Td>{formaTime(song.duration)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SongTable;
