import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        margin: "15% auto",
        padding: "2rem"
    },
    title: {
        fontSize: 24,
    },
    key: {
        fontSize: 16,
        display: "flex"
    },
    icon: {
        marginRight: "5px"
    }
});
const Profile = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    User Profile
                </Typography>
                <Typography className={classes.key} color="textPrimary" gutterBottom>
                <PersonIcon className={classes.icon} /> Full Name: 
                </Typography>
                <Typography className={classes.key} color="textPrimary" gutterBottom>
                    <EmailIcon className={classes.icon} /> Email
                </Typography>
                <Typography className={classes.key} color="textPrimary" gutterBottom>
                    <PhoneIcon className={classes.icon} /> Contact Number
                </Typography>
                <Typography className={classes.key} color="textPrimary" gutterBottom>
                    <VideoLibraryIcon className={classes.icon} /> Videos Watched
                </Typography>
                
                <Typography className={classes.key} color="textPrimary" gutterBottom>
                    <SubscriptionsIcon className={classes.icon} /> Channel Subscribed
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Profile;