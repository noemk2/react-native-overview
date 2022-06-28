import * as yup from 'yup'

export const loginValidationShema = yup.object().shape(
    {
        email: yup.string().email('Write an email validate please').required('Email is required'),
        password: yup.string().min(5, 'Too short!').max(1000, 'Too long!').required('Password is required')
    }
)