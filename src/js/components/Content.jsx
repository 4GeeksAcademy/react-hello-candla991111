import { Card } from "./Card";
import { Container, Box, Grid, Button, Typography } from "@mui/material"

export const Content = () => {
    return (

        <Box>
            <Box sx={{ backgroundColor: "gray", marginTop: "16px" }}>
                <Typography>
                    <h1>
                    A War a Welcome!
                    </h1>
                </Typography>
                <button color="primary" variant="contained" >Call To Action! </button>
                </Box>
                <Box>
                    <Grid container spacing={2} >
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Card />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Card />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Card />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Card />
                        </Grid>

                    </Grid>

                </Box>
            </Box>
        )
}