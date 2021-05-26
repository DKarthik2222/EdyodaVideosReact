import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const UpdateUser = () => {
    const firstName = useRef('')
    const lastName = useRef('')
    const email = useRef('')
    const contact = useRef('')
    const classes = useStyles();
    const updateData = e => {
        e.preventDefault();
        console.log(firstName.current.value)
        console.log(lastName.current.value)
        console.log(email.current.value)
        console.log(contact.current.value)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={updateData} autoComplete='off'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="First Name"
                                size="small"
                                autoFocus
                                inputRef={firstName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                size="small"
                                label="Last Name"
                                inputRef={lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                size="small"
                                label="Email Address"
                                type="email"
                                inputRef={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                size="small"
                                fullWidth
                                label="Contact no."
                                type="number"
                                placeholder="Enter 10 digit contact number"
                                onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                }}
                                inputRef={contact}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
          </Button>

                </form>
            </div>
        </Container>
    );
}
export default UpdateUser;