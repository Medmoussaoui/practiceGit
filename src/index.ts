import { FormSheama, SheamaValidate } from "./Validation";




const loginSheama: SheamaValidate = [
    {
        key: "email",
        isRequired: true,
        type: "string",
        max: 25,
        min: 10,
    },
    {
        key: "phone",
        isRequired: false,
        type: "string",
        max: 12,
        min: 12,
    },
    {
        key: "password",
        isRequired: true,
        type: "string",
        max: 25,
        min: 7,
        expretionPatern: ['.', 'com', '@', '-', '_', 'UpUp--']
    }
];

const loginValidator: FormSheama = new FormSheama(loginSheama);

const loginPayload = {
    "email": "dsdsdsdsdsdsdsdsd",
    "password": "1234567",

}

const result = loginValidator.validate(loginPayload);

console.log(result);