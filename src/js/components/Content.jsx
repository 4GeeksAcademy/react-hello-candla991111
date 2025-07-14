import { MyCard } from "./Card";
import { Container, Box, Grid, Typography } from "@mui/material"
import {Button} from "react-bootstrap"

export const Content = () => {
    return (

        <Box>
            <Box sx={{ backgroundColor: " #D3D3D3", width: "90%", height: "250px", margin: "auto", padding: "1%", marginTop: "2%" }}>
                <Typography>
                    <h1>
                    A War a Welcome!
                    </h1>
                </Typography>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo tempora totam, qui aliquam provident architecto molestiae
                     enim earum corrupti repudiandae neque adipisci quia repellat labore at dolorum assumenda rem?</p>
                <Button variant="primary">Call To Action!</Button>
                </Box>
                <Box sx= {{width: "90%", height: "450px", margin: "auto", marginTop: "2%"}}>
                    <Grid container spacing={2}  >
                        <Grid size={{ xs: 12, md: 3 }}>
                            <MyCard />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <MyCard />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <MyCard />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <MyCard />
                        </Grid>

                    </Grid>

                </Box>
                
            </Box>
        )
}