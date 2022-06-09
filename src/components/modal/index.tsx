import {
  Badge,
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";
import { PokemonContext } from "../../context";
import { capitalize } from "../../utils";
import { GBadge, GBadgeType } from "../badge";
import { GButton } from "../button";
import { ModalInterfaceProps } from "./modal.interface";

export const GModal: React.FC<ModalInterfaceProps> = ({
  onCloseModal,
  onOpenModal,
  isOpenModal,
  pokeData,
}) => {
  return (
    <>
      <Modal size={"xl"} isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent p={5} margin={5}>
          <ModalHeader>{capitalize(pokeData.name)}</ModalHeader>
          <Image
            height={200}
            width={282}
            objectFit={"scale-down"}
            src={`https://cdn.traction.one/pokedex/pokemon/${pokeData.id}.png`}
          />
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="xl">Height: {pokeData.height}</Text>
            <Divider />
            <Text fontSize="xl">Weight: {pokeData.weight}</Text>
            <Divider />
            <Stack direction={"row"} align={"center"}>
              <Text fontSize={"xl"}>Types:</Text>
              {pokeData.types.map((data, index) => {
                return <GBadgeType nameType={data.type.name} key={index}>{data.type.name}</GBadgeType>;
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
                <Box>
                  <Divider />
                    <Text fontSize={"xl"}>
                      {capitalize(data.stat.name) + ": " + data.base_stat}
                    </Text>
                </Box>
              );
              //return <GBadge key={index}>{}</GBadge>;
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
