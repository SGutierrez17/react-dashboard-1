import {Box, CssBaseline, Grid} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function Layout() {
  return (
    <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container m={2}>
                <Grid item flexBasis={220} bgcolor={grey[400]} m={2}>SIDE</Grid>
                <Grid item flex={1}>
                    <Grid xs={12} bgcolor={grey[400]} height={60} my={2}>HEADER</Grid>
                    <Grid container>
                        <Grid xs={3} pr={2}>
                        <Grid  bgcolor={grey[400]} height={200}>PKI</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid  bgcolor={grey[400]} height={200}>PKI</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid  bgcolor={grey[400]} height={200}>PKI</Grid>
                        </Grid>
                        <Grid xs={3}>
                        <Grid  bgcolor={grey[400]} height={200}>PKI</Grid>
                        </Grid>
                    </Grid>
                    <Grid container my={2}>
                        <Grid xs={8} pr={2}>
                        <Grid  bgcolor={grey[400]} height={'50vh'}>CONTAINER 1</Grid>
                        </Grid>
                        <Grid xs={4}>
                        <Grid  bgcolor={grey[400]} height={'50vh'}>CONTAINER 2</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
