import { ReactNode, useContext, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  useChakra,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Header, Card, Footer } from "../../components";
import { PokemonContext } from "../../context";
import { GModal } from "../../components";
import { capitalize } from "../../utils";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Pokedex() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pokemonsList, getPokemon, pokemon } = useContext(PokemonContext);

  return (
    <>
      <GModal
        pokeData={pokemon}
        isOpenModal={isOpen}
        onCloseModal={onClose}
        onOpenModal={onOpen}
      />
      <Header key={1} />
      <Wrap justify="center">
        {pokemonsList.map((data) => {
          return (
            <WrapItem p={4} id={data.id} key={data.id}>
              <Box
                cursor={'pointer'}
                onClick={() => {
                  onOpen(), getPokemon(data.id);
                }}
              >
                <Card
                  key={data.id}
                  image={`https://cdn.traction.one/pokedex/pokemon/${data.id}.png`}
                  name={capitalize(data.name)}
                />
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
      <Footer/>
    </>
  );
}
