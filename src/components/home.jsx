import { Box, Text, Flex, Button, Grid, useToast } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import UserProfile from "./userProfile";
import AddUser from "./addUserModal";
import UserForm from "./userForm";
import { addUserApi, editUserApi, fetchUsers } from "../apis";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [showmodal, setShowModal] = useState(false);
    const [payload, setPayload] = useState({})
    const [btntype, setBtnType] = useState("new");
    const toast = useToast();
    const [id,setId] = useState(null);

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
            if (data) {
                setUsers([...users, data])
            }
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

    const handleEdit = (val) => {
        setBtnType("edit")
        setPayload(val)
        setShowModal(true);
        setId(val?.id)
    }

    const edituserFunc = async () => {
        try {
            const data = await editUserApi(payload);
            toast({
                position: "top",
                title: 'Edit.',
                description: "Your Account has been edited successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setShowModal(false)
            if (data) {
                let newUserdata=users;
                newUserdata[id-1] = data;
                setUsers(newUserdata);
            }
            setBtnType("new")
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
            setBtnType("new")
        }
    }

    return (
        <Box >
            <Flex justify={"center"} alignItems={'center'} borderBottom={"1px solid grey"} p={"0.7rem"} fontWeight={"bold"}>
                Technique lu
            </Flex>
            <Flex justifyContent={"space-between"} align={"center"} pl={"1rem"} pr={"1rem"} mt={"1rem"}>
                <Text fontWeight={600} fontSize={"1.2rem"}>Users</Text>
                <Button onClick={() => {
                    setShowModal(true)
                    setPayload({});
                }}>
                    Add New User
                </Button>
            </Flex>
            <Grid mt={"1rem"} pl={"1rem"} pr={"1rem"} templateColumns={"repeat(3,1fr)"} justifyContent={"space-around"} alignItems={"center"} gap={"1rem"}>
                {users?.map((el, i) => (
                    <UserProfile {...el} key={i} handleEdit={handleEdit} val={el} />
                ))}
            </Grid>
            {showmodal && <Box onClick={() => setShowModal(false)} w={"100vw"} h={"100vh"} position={"fixed"} top={"0"} left={"0"} bg={"rgba(0,0,0,0.2)"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <UserForm edituserFunc={edituserFunc} btntype={btntype} setBtnType={setBtnType} setShowModal={setShowModal} payload={payload} setPayload={setPayload} addnewUser={addnewUser} />
            </Box>}
        </Box>
    )
}

export default Home;