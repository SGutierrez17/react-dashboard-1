import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function Layout({children}) {
    const [header, menu] = children;

    return (
    <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={220}>{menu}</Grid>
                <Grid item flex={1}>
                    <Grid xs={12}>
                        {header}
                    </Grid>
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
