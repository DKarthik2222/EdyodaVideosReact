import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #ccc"
    },
}));

const SimpleList = (prop) => {
    console.log(prop);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText>
                        something
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        something
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );
}
export default SimpleList;