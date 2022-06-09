import { PokeType } from "../../context";

export interface ModalInterfaceProps {
  onCloseModal: () => void;
  onOpenModal: () => void;
  isOpenModal: boolean;
  pokeData: PokeType;
}

