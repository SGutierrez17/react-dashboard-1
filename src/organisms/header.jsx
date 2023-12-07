import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'; 
import { Avatar, IconButton, Paper } from '@mui/material'
import { NotificationsNoneOutlined, PeopleOutlineOutlined, SearchOutlined  } from '@mui/icons-material'

import profile from '../assets/images/profile.jpg'

const ICON_STYLE = {color: '#9CA3AF'}

export default function Header() {
  return (
    <Paper sx={{bgcolor: '#fff'}}>
        <Grid sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Grid item sx={ICON_STYLE}>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <PeopleOutlineOutlined sx={ICON_STYLE}/>
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlined sx={ICON_STYLE}/>
                </IconButton>
                <IconButton>
                    <Avatar src={profile} />
                </IconButton>
            </Grid>
        </Grid>
    </Paper>
  )
}
