import { ReactNode, useContext, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Stack,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Image from "next/image";
import pokemon_logo from "../../assets/pokemon_logo.png";
import { GIconButton } from "../button";
import { PokemonContext, PokemonSearchList } from "../../context";
import AsyncSelect from "react-select/async";
import { PokemonModal } from "../modal";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenPokemonModal,
    onOpen: onOpenPokemonModal,
    onClose: onClosePokemonModal,
  } = useDisclosure();
  const { getPokemonDefault, pokemon, pokemonsSearchList } =
    useContext(PokemonContext);

  const filter = (inputValue: string) => {
    const pokemonFiltred = pokemonsSearchList.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    return pokemonFiltred;
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: PokemonSearchList[]) => void
  ) => {
    setTimeout(() => {
      callback(filter(inputValue));
    }, 1000);
  };

  const searchPokemonDescription = async (value: any) => {
    await getPokemonDefault(value.id);
    onOpenPokemonModal();
  };

  return (
    <>
      <PokemonModal
        pokeData={pokemon}
        isOpenModal={isOpenPokemonModal}
        onOpenModal={onOpenPokemonModal}
        onCloseModal={onClosePokemonModal}
      />

      <Box bg={"red"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <GIconButton
            size={"md"}
            mr={5}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box w="full">
            <Center justifyContent={'center'} w="130px">
              <Image alt="" src={pokemon_logo} />
            </Center>
          </Box>
          <Box
            display={{ base: "none", md: "unset" }}
            zIndex={150}
            w={250}
            alignItems={"center"}
          >
            <Box display={{ base: "none", md: "unset" }}>
              <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions={pokemonsSearchList}
                onChange={searchPokemonDescription}
              />
            </Box>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box zIndex={150} alignItems={"center"}>
                <AsyncSelect
                  cacheOptions
                  loadOptions={loadOptions}
                  defaultOptions={pokemonsSearchList}
                  onChange={searchPokemonDescription}
                />
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
