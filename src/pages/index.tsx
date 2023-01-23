import { ReactNode, useContext, useState } from "react";
import {
  Box,
  Center,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Header, Card, Footer } from "../components";
import { PokemonContext, PokemonList } from "../context";
import { PokemonModal } from "../components";
import { capitalize } from "../utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function Pokedex() {
  const {
    isOpen: isOpenPokemonModal,
    onOpen: onOpenPokemonModal,
    onClose: onClosePokemonModal,
  } = useDisclosure();

  const {
    getPokemonDefault,
    getPokemonNext,
    getPokemonPrevius,
    getPokemonFirstPage,
    getPokemonlastPage,
    getPokemonSearchList,
    pokemonsSearchList,
    pokemonsList,
    pokemon,
  } = useContext(PokemonContext);

  
  return (
    <>
      <PokemonModal
        pokeData={pokemon}
        isOpenModal={isOpenPokemonModal}
        onOpenModal={onOpenPokemonModal}
        onCloseModal={onClosePokemonModal}
      />
      <Header key={1} />
      <Wrap justify="center">
        {pokemonsList.map((data: PokemonList) => {
          return (
            <WrapItem p={4} id={data.id} key={data.id}>
              <Box
                cursor={"pointer"}
                onClick={() => {
                  onOpenPokemonModal(), getPokemonDefault(data.id);
                }}
              >
                <Card
                  key={data.id}
                  image={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
                  name={capitalize(data.name)}
                />
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
      <Center bg={"gray.50"} color={"gray.700"}>
        <Stack direction={"row"} p={25} align={"center"}>
          <Stack
            onClick={getPokemonFirstPage}
            cursor={"pointer"}
            direction={"column"}
            align={"center"}
          >
            <ArrowLeftIcon w={6} h={6} />

            <Text>First Page</Text>
          </Stack>
          <Stack
            onClick={getPokemonPrevius}
            cursor={"pointer"}
            direction={"column"}
            align={"center"}
          >
            <ChevronLeftIcon w={6} h={6} />
            <Text>Previus Page</Text>
          </Stack>
          <Spacer w={100} />
          <Stack
            onClick={() => {
              getPokemonNext(), window.scrollTo(0, 0);
            }}
            cursor={"pointer"}
            direction={"column"}
            align={"center"}
          >
            <ChevronRightIcon w={6} h={6} />
            <Text>Next Page</Text>
          </Stack>
          <Stack
            onClick={getPokemonlastPage}
            cursor={"pointer"}
            direction={"column"}
            align={"center"}
          >
            <ArrowRightIcon w={6} h={6} />

            <Text>last Page</Text>
          </Stack>
        </Stack>
      </Center>
      <Footer />
    </>
  );
}
