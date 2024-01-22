import BusinessDetails from "../user/businessDetails";
import { Link, Outlet } from "react-router-dom";
import { Button, Grid, AppBar, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../authContex";
import Login from "./login";


export default function Admin() {
    const isAdmin = useAuth().isAdmin;
    return (<>
        {isAdmin ? (<>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh", padding: "10px" }}
            ><Grid item container alignItems="center">
                    <Grid item xs={12} md={3}>
                        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                            <Toolbar>
                                <Typography >
                                    <a sx={{ color: "white" }}>ADMIN</a>     
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Grid>

                    <Grid item xs={12} style={{ textAlign: "center", color: "blue", margin: "80px 0" }}>
                        <BusinessDetails />
                    </Grid>
                    <Grid item style={{ textAlign: "center", color: "blue", marginTop: "-80px", marginLeft: "50px" }}>
                        <Button variant="contained" disableElevation color="primary">
                            <Link to="/admin/services" style={{ color: 'white', textDecoration: 'none' }}
                            >services</Link>
                        </Button>
                    </Grid>
                    <Grid item style={{ textAlign: "center", color: "blue", marginTop: "-80px", marginLeft: "100px" }}>

                        <Button variant="contained" disableElevation color="primary">
                            <Link to="/admin/meetings" style={{
                                color: 'white', textDecoration: 'none',
                            }}
                            >meetings</Link>
                        </Button>
                    </Grid>

                    <Outlet />
                </Grid>
            </Grid>
        </>) : (<Login />)}






        {/* <Grid item style={{ textAlign: "center" }}>
          <BusinessDetails />
        </Grid>
        <Grid item container>
          <Grid item xs={12} md={3}>
          </Grid>
         
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Outlet /> */}


    </>
    )
}