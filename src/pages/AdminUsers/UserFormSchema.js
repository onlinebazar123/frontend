import * as Yup from "yup";
export const FormSchema = Yup.object({
    user_name:Yup.string().required("name is required"),
    user_mobile:Yup.string().min(10).required("mobile is required"),
    email:Yup.string().email().required("email is required"),
    gender:Yup.string().required("gender is required"),
    address:Yup.string().required("address is required"),
    state:Yup.string().required("state is required"),
    city:Yup.string().required("city is required"),
    pin_code:Yup.string().required("gender is required"),
    // password:Yup.string().required(),
    // status:Yup.string().required("status is required"),
    // registeron:Yup.string().required("registeron is required"),
    role_id:Yup.string().required("required")
})
