import {
  Box,
  Divider,
  ModalBody,
  ModalContent,
  ModalHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { capitalize } from "../../utils";
import { GBadge, GBadgeType } from "../badge";
import { TamplateModalInterfaceProps } from "./modal.interface";

export const TamplateModal: React.FC<TamplateModalInterfaceProps> = ({
  pokeData,
}) => {
  return (
    <>
      <ModalHeader>{capitalize(pokeData.name)}</ModalHeader>
      <Image
        height={200}
        width={282}
        alt=""
        objectFit={"scale-down"}
        src={`https://img.pokemondb.net/artwork/large/${pokeData.name}.jpg`}
      />
      <ModalBody>
        <Text fontSize="xl">Height: {pokeData.height}</Text>
        <Divider />
        <Text fontSize="xl">Weight: {pokeData.weight}</Text>
        <Divider />
        <Stack direction={"row"} align={"center"}>
          <Text fontSize={"xl"}>Types:</Text>
          {pokeData.types.map((data, index) => {
            return (
              <GBadgeType nameType={data.type.name} key={index}>
                {data.type.name}
              </GBadgeType>
            );
          })}
        </Stack>
        <Divider />
        <Stack direction={"row"} align={"center"}>
          <Text fontSize={"xl"}>Abilities:</Text>
          {pokeData.abilities.map((data, index) => {
            return <GBadge key={index}>{data.ability.name}</GBadge>;
          })}
        </Stack>
        {pokeData.stats.map((data, index) => {
          return (
            <Box key={index}>
              <Divider />
              <Text fontSize={"xl"}>
                {capitalize(data.stat.name) + ": " + data.base_stat}
              </Text>
            </Box>
          );
        })}
      </ModalBody>
    </>
  );
};
