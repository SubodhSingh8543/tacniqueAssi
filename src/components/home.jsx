import { Box, Text, Flex, Button, Grid, useToast } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import UserProfile from "./userProfile";
import AddUser from "./addUserModal";
import UserForm from "./userForm";
import { addUserApi, fetchUsers } from "../apis";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [showmodal, setShowModal] = useState(false);
    const [payload, setPayload] = useState({})
    const toast = useToast();

    const getUsers = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (error) {
            console.log("error");
        }
    }

    const addnewUser = async () => {
        try {
            const data = await addUserApi(payload);
            toast({
                position: "top",
                title: 'Account created.',
                description: "Your Account has been created successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setShowModal(false)
        } catch (error) {
            toast({
                position: "top",
                title: "Error",
                description: (
                    <>
                        <div>{error.message}</div>
                    </>
                ),
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    console.log(users, showmodal);

    return (
        <Box >
            <Flex justify={"center"} alignItems={'center'} borderBottom={"1px solid grey"} p={"0.7rem"} fontWeight={"bold"}>
                Technique lu
            </Flex>
            <Button onClick={() => setShowModal(true)}>
                Add New User
            </Button>
            <Grid mt={"1rem"} pl={"1rem"} pr={"1rem"} templateColumns={"repeat(3,1fr)"} justifyContent={"space-around"} alignItems={"center"} gap={"1rem"}>
                {users?.map((el, i) => (
                    <UserProfile {...el} key={i} />
                ))}
            </Grid>
            {showmodal && <Box onClick={() => setShowModal(false)} w={"100vw"} h={"100vh"} position={"fixed"} top={"0"} left={"0"} bg={"rgba(0,0,0,0.2)"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <UserForm setShowModal={setShowModal} payload={payload} setPayload={setPayload} addnewUser={addnewUser} />
            </Box>}
        </Box>
    )
}

export default Home;