import { Box, Center, Heading, Stack, Image } from "@chakra-ui/react";
import { CardInterfaceProps } from "./card.interface";

export const Card: React.FC<CardInterfaceProps> = ({ image, name }) => {
  return (
    <>
      <Box>
        <Center>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box rounded={"lg"} pos={"relative"} height={"230px"}>
              <Image alt="" height={230} width={282} src={image} />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {name}
              </Heading>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};
