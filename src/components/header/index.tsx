import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Image from "next/image";
import pokemon_logo from "../../assets/pokemon_logo.png";
import { GButton } from "../button/GButton";
import { GIconButton } from "../button";


const Links = [
  {
    nome: "Batalha",
    link: "/batalha",
  },
];

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"red"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <GIconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w="130px">
              <Image alt="" src={pokemon_logo} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({link,nome}) => (
                <Link
                key=''
                px={2}
                py={1}
                rounded={"md"}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  bg: "#2ca9f9",
                }}
                href={link}
              >
                {nome}
              </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <GButton
              variant={"solid"}
              colorScheme={"green"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </GButton>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({nome,link}) => (
                <Link
                key={''}
                px={2}
                py={1}
                rounded={"md"}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  bg: "#2ca9f9",
                }}
                href={link}
              >
                {nome}
              </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
