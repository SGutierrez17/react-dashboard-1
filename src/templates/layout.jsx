import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material'

export default function Layout({children}) {
    const [header, menu, kpi1, kpi2, kpi3, kpi4, sales, traffic] = children;

    return (
    <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={220}>{menu}</Grid>
                <Grid item flex={1}>
                    <Grid xs={12}>
                        {header}
                    </Grid>
                    <Grid container sx={{justifyContent: "center", margin: "10px"}}>
                        <Grid xs={3} pr={2}>
                        <Grid>{kpi1}</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid>{kpi2}</Grid>
                        </Grid>
                        <Grid xs={3} pr={2}>
                        <Grid>{kpi3}</Grid>
                        </Grid>
                        <Grid xs={3}>
                        <Grid>{kpi4}</Grid>
                        </Grid>
                    </Grid>
                    <Grid container m={2}>
                        <Grid xs={8} pr={2}>
                        <Grid height={'50vh'}>{sales}</Grid>
                        </Grid>
                        <Grid xs={4}>
                        <Grid height={'50vh'}>{traffic}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
  )
}
