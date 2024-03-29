import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const checkoutSchema = yup.object().shape({
          firstName: yup.string().required("Required"),
          lastName: yup.string().required("Required"),
          streeAddress: yup.string().required("Required"),
          city: yup.string().required("Required"),
          zipCode: yup.string().required("Required"),
          phone: yup.number().required("Required"),
          email: yup.string().email("Please enter a valid email").required("Required"),
});


export const loginSchema = yup.object().shape({
          username: yup.string().min(3, "Username must be at least 3 characters long").required("Required"),
          password: yup.string().min(5).required("Required")
});