import React, {useState} from "react";
import {
    IconButton,
    TextField
} from "@material-ui/core";
import { useLoginContext } from "../contexts/LoginContext";
import Button from "@material-ui/core/Button";
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import Collapse from "@material-ui/core/Collapse";
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');

    const loginContext = useLoginContext();
    const [open, setOpen] = useState(true);
    const [collapseOpen, setCollapseOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };

    return !loginContext.isAuth ? (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableBackdropClick={true}
            >
                <DialogTitle id="form-dialog-title">
                    <IconButton aria-label='settings'>
                        <ErrorIcon />
                    </IconButton>
                    Please Login
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To access this web app please enter your email address and password! Please enjoy some tunes!
                    </DialogContentText>
                    <Formik
                        initialValues={{ firstName: '', email: '', password: '', submit: null }}
                        validationSchema={Yup.object().shape({
                            firstName: Yup.string()
                                .max(50, 'First name is too long (must be at most 50 characters)')
                                .required('First name is required'),
                            email: Yup.string()
                                .email('Must be a valid email')
                                .max(50)
                                .required('Email is required'),
                            password: Yup.string()
                                .min(8, 'Password is too short (must be at least 8 characters)')
                                .max(30, 'Password is too long (must be at most 30 characters)')
                                .required('Password is required'),
                        })}
                        onSubmit={ (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setEmail(email);
                                setPassword(password);
                                setFirstName(firstName);
                                loginContext.login();
                                loginContext.setEmail(values.email);
                                loginContext.setPassword(values.password);
                                loginContext.setFirstName(values.firstName);
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                                <TextField
                                    margin="dense"
                                    id="firstName"
                                    label="First Name"
                                    placeholder="Billy"
                                    name="firstName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    helperText={touched.firstName && errors.firstName}
                                    required
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    placeholder="username@example.com"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                    required
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder='********'
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                    required
                                    fullWidth
                                />
                                <DialogActions>
                                    <Button onClick={handleSubmit} type="submit" disabled={Boolean(
                                        errors.firstName ||
                                        errors.email ||
                                        errors.password ||
                                        values.firstName === '' ||
                                        values.email === '' ||
                                        values.password === '')}>Login
                                    </Button>
                                </DialogActions>
                            </form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
    ) : (<div>
            <Collapse in={collapseOpen}>
                <Alert
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setCollapseOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Welcome {loginContext.firstName}, you have successfully logged in!
                </Alert>
            </Collapse>
        </div>);
}

export default Login;