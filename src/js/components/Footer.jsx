import { Typography, Box, Toolbar, AppBar  } from "@mui/material";

export const Footer = () => {
    return (
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexDirection: "row", fontSize: "1.2rem", margin:"auto" }}>
            Copyright © Your Website 2019 
          </Typography>
           
          </Toolbar>
          </AppBar>
        
          </Box>
    
    )
}