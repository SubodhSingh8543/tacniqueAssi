'use client'

import { useEffect, useState } from 'react'
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    useToast
} from '@chakra-ui/react'
import { validateBs, validateCatchPhrase, validateCity, validateCompanyName, validateEmail, validateGeo, validateName, validatePhone, validateStreet, validateSuite, validateUsername, validateWebsite, validateZipcode } from '../validators'
import { OutsideClickHandler } from './home'
import { RxCross2 } from "react-icons/rx";
import { addUserApi } from '../apis'

const Form1 = ({ userInfo, setUserInfo, validateUserInfo }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                User Registration
            </Heading>
            <Flex>
                <FormControl >
                    <FormLabel htmlFor="name" fontWeight={'normal'}>
                        Name
                    </FormLabel>
                    <Input id="name" placeholder="First name" isInvalid={!validateUserInfo.name} value={userInfo?.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
                </FormControl>
            </Flex>

            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    User Name
                </FormLabel>
                <Input id="email" type="email" placeholder='User Name' isInvalid={!validateUserInfo.username} value={userInfo?.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email address
                </FormLabel>
                <Input id="email" type="email" placeholder='Email' isInvalid={!validateUserInfo.email} value={userInfo?.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'} >
                    Phone
                </FormLabel>
                <Input id="email" type="email" placeholder='Phone' isInvalid={!validateUserInfo.phone} value={userInfo?.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'} >
                    Website
                </FormLabel>
                <Input id="email" type="email" placeholder='http://www.example.com' isInvalid={!validateUserInfo.website} value={userInfo?.website} onChange={(e) => setUserInfo({ ...userInfo, website: e.target.value })} />
            </FormControl>


        </>
    )
}

const Form2 = ({ userAddress, setUserAdd, validateUserAdd }) => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                User Details
            </Heading>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Suite
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    placeholder='Suite'
                    value={userAddress?.suite} onChange={(e) => setUserAdd({ ...userAddress, suite: e.target.value })}
                    isInvalid={!validateUserAdd.suite}
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Street address
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    placeholder='Street'
                    value={userAddress?.street} onChange={(e) => setUserAdd({ ...userAddress, street: e.target.value })}
                    isInvalid={!validateUserAdd.street}
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    City
                </FormLabel>
                <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    placeholder='City'
                    value={userAddress?.city} onChange={(e) => setUserAdd({ ...userAddress, city: e.target.value })}
                    isInvalid={!validateUserAdd.city}
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    placeholder='Zip/Postal'
                    value={userAddress?.zipcode} onChange={(e) => setUserAdd({ ...userAddress, zipcode: e.target.value })}
                    isInvalid={!validateUserAdd.zipcode}
                />
            </FormControl>
        </>
    )
}

const Form3 = ({ companyInfo, setCompanyInfo, validateCompanyInfo }) => {

    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Company Details
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Company Name
                    </FormLabel>
                    <Input id="email" type="email" placeholder='Company' isInvalid={!validateCompanyInfo.name} value={companyInfo?.name} onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })} />
                </FormControl>

                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        BS
                    </FormLabel>
                    <Input id="email" type="email" placeholder='BS' isInvalid={!validateCompanyInfo.bs} value={companyInfo?.bs} onChange={(e) => setCompanyInfo({ ...companyInfo, bs: e.target.value })} />
                </FormControl>
                <FormControl id="email" mt={1}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Catch Phrase
                    </FormLabel>
                    <Textarea
                        placeholder="you@example.com"
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                        isInvalid={!validateCompanyInfo.catchPhrase}
                        value={companyInfo?.catchPhrase} onChange={(e) => setCompanyInfo({ ...companyInfo, catchPhrase: e.target.value })}
                    />

                </FormControl>
            </SimpleGrid>
        </>
    )
}

export default function UserForm({ edituserFunc, btntype, setBtnType, setShowModal, setPayload, payload, addnewUser }) {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);

    const [userInfo, setUserInfo] = useState({
        email: payload?.email || "",
        name: payload?.name || "",
        phone: payload?.phone || "",
        username: payload?.username || "",
        website: payload?.website || "",
    });

    const [validateUserInfo, setValidateUserInfo] = useState({
        email: true,
        name: true,
        phone: true,
        username: true,
        website: true,
    });

    const [userAddress, setUserAdd] = useState({
        city: payload?.address?.city || "",
        geo: payload?.address?.geo || { lat: '-37.3159', lng: '81.1496' },
        street: payload?.address?.street || "",
        suite: payload?.address?.suite || "",
        zipcode: payload?.address?.zipcode || "",
    });

    const [validateUserAdd, setValidateUserAdd] = useState({
        city: true,
        geo: true,
        street: true,
        suite: true,
        zipcode: true,
    });

    const [companyInfo, setCompanyInfo] = useState({
        bs: payload?.company?.bs || "",
        catchPhrase: payload?.company?.catchPhrase || "",
        name: payload?.company?.name || ""
    });

    const [validateCompanyInfo, setValidateCompanyInfo] = useState({
        bs: true,
        catchPhrase: true,
        name: true
    });

    const validateForm1 = () => {
        // Validate user info
        const isEmailValid = validateEmail(userInfo.email);
        const isNameValid = validateName(userInfo.name);
        const isPhoneValid = validatePhone(userInfo.phone);
        const isUsernameValid = validateUsername(userInfo.username);
        const isWebsiteValid = validateWebsite(userInfo.website);

        setValidateUserInfo({
            ...validateUserInfo,
            email: isEmailValid,
            name: isNameValid,
            phone: isPhoneValid,
            username: isUsernameValid,
            website: isWebsiteValid
        })

        if (
            isEmailValid &&
            isNameValid &&
            isPhoneValid &&
            isUsernameValid &&
            isWebsiteValid) {
            setStep(step + 1)
            setProgress(progress + 33.33);
        } else {
            // Display error messages or handle invalid inputs
            toast({
                position: "top",
                title: 'Invalid credentials',
                description: (
                    <>
                        <div>{isEmailValid ? "" : "Email is incorrect. "}</div>
                        <div> {isNameValid ? "" : "Name is incorrect. "}</div>
                        <div>{isPhoneValid ? "" : "Phone number is incorrect. "}</div>
                        <div>{isUsernameValid ? "" : "User Name is incorrect. "}</div>
                        <div>  {isWebsiteValid ? "" : "Website name is incorrect."}</div>
                    </>
                ),
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

        }
    }

    const validateForm2 = () => {
        // Validate user address
        const isCityValid = validateCity(userAddress.city);
        const isGeoValid = validateGeo(userAddress.geo);
        const isStreetValid = validateStreet(userAddress.street);
        const isSuiteValid = validateSuite(userAddress.suite);
        const isZipcodeValid = validateZipcode(userAddress.zipcode);

        setValidateUserAdd({
            ...validateUserAdd,
            city: isCityValid,
            geo: isGeoValid,
            street: isStreetValid,
            suite: isSuiteValid,
            zipcode: isZipcodeValid,
        })

        if (
            isCityValid &&
            isGeoValid &&
            isStreetValid &&
            isSuiteValid &&
            isZipcodeValid
        ) {
            setStep(step + 1)
            setProgress(progress + 33.33);
        } else {
            // Display error messages or handle invalid inputs
            toast({
                position: "top",
                title: 'Invalid credentials',
                description: (
                    <>
                        <div>{isCityValid ? "" : "City name is incorrect. "}</div>
                        <div>{isGeoValid ? "" : "Geo Location is incorrect. "}</div>
                        <div>{isStreetValid ? "" : "Street name is incorrect. "}</div>
                        <div>{isSuiteValid ? "" : "Suite is incorrect. "}</div>
                        <div>{isZipcodeValid ? "" : "Zip code is incorrect."}</div>
                    </>
                ),
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

        }
    }

    const validateForm3 = () => {
        // Validate company info
        const isBsValid = validateBs(companyInfo.bs);
        const isCatchPhraseValid = validateCatchPhrase(companyInfo.catchPhrase);
        const isCompanyNameValid = validateCompanyName(companyInfo.name);

        setValidateCompanyInfo({
            ...validateCompanyInfo,
            bs: isBsValid,
            catchPhrase: isCatchPhraseValid,
            name: isCompanyNameValid,
        })

        if (
            isBsValid &&
            isCatchPhraseValid &&
            isCompanyNameValid
        ) {
            addnewUser()
        } else {
            // Display error messages or handle invalid inputs
            toast({
                position: "top",
                title: 'Invalid credentials',
                description: (
                    <>
                        <div>{isBsValid ? "" : "BS is incorrect. "}</div>
                        <div>{isCatchPhraseValid ? "" : "CatchPhrase is incorrect. "}</div>
                        <div>{isCompanyNameValid ? "" : "Company name is incorrect. "}</div>
                    </>
                ),
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

        }
    }

    const moveNext = () => {
        if (step == 1) {
            validateForm1();
        } else if (step == 2) {
            validateForm2();
        }
    }

    const handleChildClick = (event) => {
        event.stopPropagation();
    };

    useEffect(() => {
        setPayload({ ...payload, ...userInfo, address: { ...userAddress }, company: { ...companyInfo } })
    }, [userInfo, userAddress, companyInfo])

    console.log("this is payload", payload);
    return (

        <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={500}
            width={500}
            p={6}
            m="10px auto"
            bg={"white"}
            as="form"
            onClick={(event) => handleChildClick(event)}
            position={"relative"}
        >
            <RxCross2 style={{ position: "absolute", right: "2rem" }} onClick={() => setShowModal(false)} />
            {/* <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress> */}
            {step === 1 ? <Form1 userInfo={userInfo} validateUserInfo={validateUserInfo} setUserInfo={setUserInfo} /> : step === 2 ? <Form2 userAddress={userAddress} setUserAdd={setUserAdd} validateUserAdd={validateUserAdd} /> : <Form3 companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} validateCompanyInfo={validateCompanyInfo} payload={payload} />}
            <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                    <Flex>
                        <Button
                            onClick={() => {
                                setStep(step - 1)
                                setProgress(progress - 33.33)
                            }}
                            isDisabled={step === 1}
                            colorScheme="teal"
                            variant="solid"
                            w="7rem"
                            mr="5%">
                            Back
                        </Button>
                        <Button
                            w="7rem"
                            isDisabled={step === 3}
                            onClick={() => moveNext()}
                            colorScheme="teal"
                            variant="outline">
                            Next
                        </Button>
                    </Flex>
                    {step === 3 ? (
                        <Button
                            w="7rem"
                            colorScheme="red"
                            variant="solid"
                            onClick={() => btntype === "new" ?  validateForm3() : edituserFunc()}>
                                {btntype === "new" ? "Submit" : "Edit"}
                        </Button>
                    ) : null}
                </Flex>
            </ButtonGroup>

        </Box>

    )
}