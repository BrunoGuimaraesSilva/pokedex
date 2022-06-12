import {
  Badge,
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { capitalize } from "../../utils";
import { GBadge, GBadgeType } from "../badge";
import { PokemonModalInterfaceProps } from "./modal.interface";
import { TamplateModal } from "./tamplateModal";

export const PokemonModal: React.FC<PokemonModalInterfaceProps> = ({
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
         <TamplateModal pokeData={pokeData} key={1}/>
        </ModalContent>
      </Modal>
    </>
  );
};
