import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';

function DeleteUser({handleDelete,id}) {
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayTwo />)

    return (
        <>
            <Button
                flex='1'
                bg={"#fb4e4e"}
                color={"white"}
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
                leftIcon={<MdOutlineDelete />}
            >
                Delete
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Delete User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure want to delete!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Flex gap={"1rem"}>
                            <Button onClick={onClose} bg={"blue"} color={"white"}>No</Button>
                            <Button onClick={() => {
                                handleDelete(id)
                                onClose()
                                }} bg={"red"} color={"white"}>Yes</Button>
                        </Flex>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteUser;