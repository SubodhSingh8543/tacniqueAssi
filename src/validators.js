
export const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateName = (name) => {
    // Check if name is not empty
    return name.trim() !== "";
};

export const validatePhone = (phone) => {
    // Basic phone number format validation (assuming a US format)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
};

export const validateUsername = (username) => {
    // Check if username is not empty
    return username.trim() !== "";
};

export const validateWebsite = (website) => {
    // Basic URL format validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(website);
};

export const validateCity = (city) => {
    // Check if city name is not empty
    return city.trim() !== "";
};

export const validateGeo = (geo) => {
    // Check if lat and lng are valid numbers
    return !isNaN(geo.lat) && !isNaN(geo.lng);
};

export const validateStreet = (street) => {
    // Check if street name is not empty
    return street.trim() !== "";
};

export const validateSuite = (suite) => {
    // Check if suite name is not empty
    return suite.trim() !== "";
};

export const validateZipcode = (pincode) => {
    // Basic PIN code format validation (assuming an Indian format)
    const pinRegex = /^\d{6}$/;
    return pinRegex.test(pincode);
};

export const validateBs = (bs) => {
    // Check if bs is not empty
    return bs.trim() !== "";
};

export const validateCatchPhrase = (catchPhrase) => {
    // Check if catch phrase is not empty
    return catchPhrase.trim() !== "";
};

export const validateCompanyName = (name) => {
    // Check if company name is not empty
    return name.trim() !== "";
};



// const handleFormSubmit = () => {
//     // Validate user info
//     const isEmailValid = validateEmail(userInfo.email);
//     const isNameValid = validateName(userInfo.name);
//     const isPhoneValid = validatePhone(userInfo.phone);
//     const isUsernameValid = validateUsername(userInfo.username);
//     const isWebsiteValid = validateWebsite(userInfo.website);

//     // Validate user address
//     const isCityValid = validateCity(userAddress.city);
//     const isGeoValid = validateGeo(userAddress.geo);
//     const isStreetValid = validateStreet(userAddress.street);
//     const isSuiteValid = validateSuite(userAddress.suite);
//     const isZipcodeValid = validateZipcode(userAddress.zipcode);

//     // Validate company info
//     const isBsValid = validateBs(companyInfo.bs);
//     const isCatchPhraseValid = validateCatchPhrase(companyInfo.catchPhrase);
//     const isCompanyNameValid = validateCompanyName(companyInfo.name);

//     // Check if all validations pass
//     if (
//         isEmailValid &&
//         isNameValid &&
//         isPhoneValid &&
//         isUsernameValid &&
//         isWebsiteValid &&
//         isCityValid &&
//         isGeoValid &&
//         isStreetValid &&
//         isSuiteValid &&
//         isZipcodeValid &&
//         isBsValid &&
//         isCatchPhraseValid &&
//         isCompanyNameValid
//     ) {
//         // Proceed with form submission
//     } else {
//         // Display error messages or handle invalid inputs
//     }
// };