import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(false);
  const [index, setIndexc] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const setPlayState = (value: any) => {
    setPlaying(value);
  };

  const onShuffle = () => {
    setShuffle(!shuffle);
  };

  const onRepeat = () => {
    setRepeat(!repeat);
  };

  return (
    <Box>
      <Box>{<ReactHowler playing={playing} src={activeSong.url} />}</Box>
      <Center color={"gray.600"}>
        <ButtonGroup>
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="shuffle"
            fontSize={"24px"}
            color={shuffle ? "white" : "gray.600"}
            onClick={onShuffle}
            icon={<MdShuffle />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="shuffle"
            fontSize={"24px"}
            icon={<MdSkipPrevious />}
          />
          {playing ? (
            <IconButton
              outline={"none"}
              variant="link"
              aria-label="shuffle"
              fontSize={"40px"}
              color="white"
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => setPlayState(false)}
            />
          ) : (
            <IconButton
              outline={"none"}
              variant="link"
              aria-label="shuffle"
              fontSize={"40px"}
              color="white"
              icon={<MdOutlinePlayCircleFilled />}
              onClick={() => setPlayState(true)}
            />
          )}
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="shuffle"
            fontSize={"24px"}
            icon={<MdSkipNext />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="shuffle"
            fontSize={"24px"}
            color={repeat ? "white" : "gray.600"}
            onClick={onRepeat}
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex justify={"center"}>
          <Box width="10%">
            <Text fontSize={"x-small"}>1:21</Text>
          </Box>
          <Box width={"80%"}>
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600"></RangeSliderFilledTrack>
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign={"right"}>
            <Text fontSize={"x-small"}>1:21</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
