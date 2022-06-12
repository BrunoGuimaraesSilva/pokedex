import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Image from "next/image";
import pokemon_logo from "../../assets/pokemon_logo.png";


const Links = [
  {
    nome: "Batalha",
    link: "/batalha",
  },
];

export default function Batalha() {
  return (
    <>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
