
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Heading, IconButton, Image, Button, Flex, Box, Text } from '@chakra-ui/react';
import { MdDelete, MdEdit, MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const UserProfile = ({ name, email, phone, website, username, address, company,handleEdit,val }) => {

    return (
        <Card maxW='md' height={"100%"} bg={"rgb(0 246 255 / 16%)"}>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='start' flexWrap='wrap'>
                        <Box>
                            <span style={{ display: "flex", gap: "1rem" }}><Heading size={"sm"}>{"Name: "} </Heading> <Text textAlign={"start"} >{name}</Text></span>
                            <span style={{ display: "flex", gap: "1rem" }}><Heading size={"sm"}>{"Username: "}</Heading> <Text textAlign={"start"} >{username}</Text></span>
                            <span style={{ display: "flex", gap: "1rem" }}><Heading size={"sm"}>{"Email: "}</Heading> <Text textAlign={"start"} >{email}</Text></span>
                            <span style={{ display: "flex", gap: "1rem" }}><Heading size={"sm"}>{"Phone: "}</Heading> <Text textAlign={"start"}>{phone}</Text></span>
                            <span style={{ display: "flex", gap: "1rem" }}><Heading size={"sm"}>{"Website: "}</Heading> <Text textAlign={"start"}>{website}</Text></span>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Heading size="sm" textAlign={"start"}>Address :</Heading>
                <Box ml={"1rem"}>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"City: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{address?.city}</Text></span>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"ZipCode: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{address?.zipcode}</Text></span>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"Street: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{address?.street}</Text></span>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"Suite: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{address?.suite}</Text></span>
                </Box>
                <Heading size="sm" textAlign={"start"} mt={"0.5rem"}>Company :</Heading>
                <Box ml={"1rem"}>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"Name: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{company?.name}</Text></span>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"CatchPhrase: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{company?.catchPhrase}</Text></span>
                    <span style={{ display: "flex", gap: "0.5rem" }}><Heading fontSize={"0.9rem"} >{"BS: "}</Heading> <Text textAlign={"start"} fontSize={"0.9rem"}>{company?.bs}</Text></span>
                </Box>
            </CardBody>
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                gap={"0.5rem"}
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button onClick={() => handleEdit(val)} flex='1' leftIcon={<CiEdit />} bg={"white"}>
                    Edit
                </Button>
                <Button flex='1' leftIcon={<MdOutlineDelete />} bg={"white"}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

export default UserProfile;