import React from 'react'
import { Box, IconButton, InputBase, createStyles, makeStyles, Theme } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);
function SearchBand() {
    const classes = useStyles();
    return (
        <Box bgcolor='#f6f6f6' p={1}>
            <Box display='flex' bgcolor='white' borderRadius='20px' height='35px'>
                <IconButton >
                <SearchIcon style={{fontSize:'18px'}}/>
                </IconButton>
                <InputBase
                    className={classes.margin}
                    placeholder='Search or start new chat'
                    inputProps={{ 'aria-label': 'naked' }}
                />
            </Box>
        </Box>
    )
}

export default SearchBand
