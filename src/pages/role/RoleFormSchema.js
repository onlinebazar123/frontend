import * as Yup   from"yup";
export const roleFormSchema = Yup.object({
    role_id : Yup.string().min(2).required("Please enter Role Id"),
    role_name : Yup.string().min(4).required("Please enter Role Name")
})