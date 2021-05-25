import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const UploadVideo = () => {
    const title = useRef('')
    const description = useRef('')
    const duration = useRef('')
    const vimeo = useRef('')
    const thumbnail = useRef('')
    const classes = useStyles();
    const upload = e => {
        e.preventDefault();
        console.log(title.current.value)
        console.log(description.current.value)
        console.log(duration.current.value)
        console.log(vimeo.current.value)
        console.log(thumbnail.current.value)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Upload Video
                </Typography>
                <form className={classes.form} onSubmit={upload} autoComplete='off'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Video Title"
                                autoFocus
                                inputRef={title}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Video Description"
                                inputRef={description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Video Duration"
                                inputRef={duration}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Video’s Vimeo URL"
                                type="url"
                                inputRef={vimeo}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Thumbnail URL"
                                type="url"
                                inputRef={thumbnail}
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
                        Upload
                    </Button>
                </form>
            </div>
        </Container>
    );
}
export default UploadVideo;