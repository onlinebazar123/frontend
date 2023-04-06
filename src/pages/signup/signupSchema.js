import * as Yup from "yup"
export const signupSchema = Yup.object({
    name:Yup.string().min(3).required(),
    email:Yup.string().email().required(),
    password:Yup.string().min(6).required(),
})