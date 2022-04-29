import {Box, Button, TextField, Typography} from "@mui/material";
import * as yup from 'yup';
import {DatePicker} from "@mui/lab";
import {useFormik} from "formik";
import {post} from "../../util";

const validationSchema = yup.object({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
});


export const SignInBox = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async values => {
            try {
                let username = "";
                await post("/login", {
                    username: values.username,
                    password: values.password

                }).then(res => {
                    username = values.username;
                    props.setUsername(username);
                    localStorage.setItem("logged_in_user", username)
                    props.setDisplayLoginPage(false)
                })

            } catch (e) {
                if (e instanceof Error) {
                    formik.setErrors({password: e.message, username: e.message})
                }
            }
        },
    });


    return (
        <Box className={"mid-container"}
             component="form"
             autoComplete={"off"}
             sx={{
                 '& .MuiTextField-root': {m: 1, width: '25ch'},
             }}
             noValidate
             onSubmit={formik.handleSubmit}
        >
            <Typography variant="h2" component={"h3"}>
                Sign in
            </Typography>
            <TextField
                required
                id="sign-in-name"
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
                required
                id="sign-in-password"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button id={'log-in-btn'} variant="contained" type={"submit"}>Log In</Button>
        </Box>
    )
}
export const RegisterBox = (props) => {
    const registerValidationSchema = yup.object({
        accountName: yup
            .string()
            .required('Account Name is required')
            .matches(new RegExp("[a-zA-Z]+[a-zA-Z0-9]+"), "Account name should only contain number and letter and should start with letter"),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password must match"),
    });

    const formik = useFormik({
        initialValues: {
            accountName: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (values) => {
            try {
                // let user = await register(values.accountName, values.email, values.dateOfBirth, values.zipcode, values.password)
                await post("/register", {
                    username: values.accountName,
                    password: values.password
                })
                await post("/login", {
                    username: values.accountName,
                    password: values.password
                }).then(res=>{
                    let username = values.accountName;
                    props.setUsername(username);
                    localStorage.setItem("logged_in_user", username)
                    props.setDisplayLoginPage(false)
                })
            } catch (e) {
                console.log(e)
                if (e instanceof Error) {

                    formik.setErrors({accountName: e.message})
                }
            }
        }

    });


    return (
        <Box className={"mid-container"}
             component="form"
             autoComplete={"off"}
             sx={{
                 '& .MuiTextField-root': {m: 1, width: '25ch'},
             }}
             noValidate
             onSubmit={formik.handleSubmit}
        >
            <Typography variant="h2" component={"h3"}>
                Sign Up
            </Typography>
            <TextField
                required
                id="sign-up-name"
                label="Account Name"
                name="accountName"
                value={formik.values.accountName}
                onChange={formik.handleChange}
                error={formik.touched.accountName && Boolean(formik.errors.accountName)}
                helperText={formik.touched.accountName && formik.errors.accountName}
            />


            <TextField
                required
                id="sign-up-password"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                required
                id="sign-up-password-confirmation"
                label="Password Confirmation"
                type="password"
                autoComplete="current-password"
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            />

            <Button variant="contained" type={"submit"}>Sign Up</Button>
        </Box>
    )
}


let LoginPage = (props) => {
    return (
        <div className={"main"}>
            <SignInBox setUsername={props.setUsername} setDisplayLoginPage={props.setDisplayLoginPage}/>
            <RegisterBox setUsername={props.setUsername} setDisplayLoginPage={props.setDisplayLoginPage}/>
        </div>
    )
}


export default LoginPage;
