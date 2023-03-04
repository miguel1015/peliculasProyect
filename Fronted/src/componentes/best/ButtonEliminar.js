import {
  Modal,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";

export default function ButtonEliminar({ botonEliminar, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <td className="btnDelete">
      <button
        onClick={() => {
            onOpen()
        }}
        className="button-86"
        >
        <FcDeleteDatabase className="iconedit"></FcDeleteDatabase>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalFooter className="modalEliminar">
          <ModalCloseButton className="ModalCloseBoton2" />
          <Text className="textoModalEliminar" >¿Estas seguro que deseas eliminar esta critica?</Text>
            <Button className="botonNO" mr={3} onClick={onClose}>
              NO
            </Button>
            <Button
              className="botonSi"
              onClick={() => {
                  botonEliminar(id._id);
                  onClose()
                }}
                >
              Si
            </Button>
          </ModalFooter>
      </Modal>
    </td>
  );
}
