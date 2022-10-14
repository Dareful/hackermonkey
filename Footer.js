import React from 'react'
import { Typography } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container:{
        display: 'flex'
    },
    left_div:{
        display: 'flex',
        mergin: '5%',
        padding: '1% 3%'

    },
    right_div:{
        display: 'flex',
        justifyContent: 'flex-end', 
        flex: 1,
        padding: '1% 4%'
    },
    text1:{
        color: "#6CCACB",
        padding: ' 0px 10px'
    },
    text2:{
        color: "#39586E",
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <>
        <hr/>
        <div className={classes.container}>
            <div className={classes.left_div}>
                <Typography><span className={classes.text1}>Copyright &#169; 2019</span></Typography>
                <Typography><span className={classes.text1}>Hodlinfo.com Developed By </span></Typography>
                <Typography><span className={classes.text2}>QuadBTech</span></Typography>
            </div>
            <div className={classes.right_div}>
                    <Typography className={classes.text1}>support</Typography>
            </div>
        </div>
        </>
    )
}

export default Footer;
