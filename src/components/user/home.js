import { Button, Grid, AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ServicesList from "./servicesList";
import BusinessDetails from "./businessDetails";

export default function Home() {
  return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", padding: "10px" }}
      >

        <Grid item container alignItems="center">
          <Grid item xs={12} md={3}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{backgroundColor:"blue"}}>
                  <Button variant="contained" disableElevation sx={{color:"white"}}>
                    <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
                      Log in
                    </Link>
                  </Button>
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", color: "blue", margin: "80px 0"}}>
            <h1>REAL ESTATE</h1>
          </Grid>
        </Grid>
        <Grid item style={{ textAlign: "center", color: "blue", marginTop:"-80px"}}>
          <p>
            Welcome to our real estate platform. Find the perfect property that
            suits your needs.
          </p>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <BusinessDetails />
        </Grid>
        <Grid item container>
          <Grid item xs={12} md={3}>
          </Grid>
          <Grid item xs={12} >
            <ServicesList/>
          </Grid>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Outlet />

      </Grid>
  );
}

