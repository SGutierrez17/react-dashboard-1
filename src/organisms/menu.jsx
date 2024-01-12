import React from 'react'

import { Autocomplete, Avatar, Box, List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleIcon from '@mui/icons-material/People';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';

import logo from '../assets/images/logo.png'

const MARGIN_ICON = {marginRight: '8px'}
const ICON_BG = {
    color: '#6B7280', '&:hover':{
        color:'#EEF3FD',
        bgcolor:'#9CAJAF'
    }
}

const tier = [
    {label: 'Basic'},
    {label: 'Medium'},
    {label: 'Premium'}
]

export default function Menu() {
  return (
    <Box sx={{bgcolor:'#192130', p:'12px', height:"100vh"}} >
        <Box> 
            <Avatar src={logo} sx={{my:2, width: 80}}/>
        </Box>
        <Box> 
            <Autocomplete 
                disablePortal
                options={tier}
                sx={{width: 200}}
                renderInput={(params) => <TextField {...params} label='Acmen Inc' />}
            />
        </Box>
        <hr />
        <List item sx={{display:'flex', flexDirection:'column'}}>
            <ListItem disablePadding>
                <ListItemButton sx={{color:'#12B981', '&:hover':{color:'#EEF3FD'}}}>
                    <SignalCellularAltIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Dashboard'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <PeopleIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Customers'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <LocalMallIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Products'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <PersonIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Account'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SettingsIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Settings'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <LockPersonIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Login'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <PersonAddAlt1Icon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Register'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <CancelIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Error'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}
