import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import pokemon_logo from "../../assets/pokemon_logo.png";

export function Footer() {
  return (
    <Box bg={"gray.50"} color={"gray.700"}>
      <Box py={5}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Box w="130px">
            <Image alt="" src={pokemon_logo} />
          </Box>
        </Flex>
        <Text pt={3} fontSize={"sm"} textAlign={"center"}>
          © 2022 Bruno Guimarães da Silva. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
