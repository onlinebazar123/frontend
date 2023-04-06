import * as Yup from "yup";
export const loginSchema = Yup.object({
    email: Yup.string().email().required("email is required"),
    password:Yup.string().min(6).required("password is required")
})