import { observer } from "mobx-react";
import services from "../store/services";
import { Grid, Box, Fab, Button } from '@mui/material';
import Service from "./service";
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { styled } from '@mui/system';
import { useState } from "react";
import AddService from "../admin/addService";
import { useAuth } from "../authContex";
import { Outlet } from "react-router-dom";

const StyledContainer = styled(Box)({
    backgroundColor: '#e1f5fe',
    padding: '10px',
    borderRadius: '5px',
    margin: '70px'
});

const ServicesList = observer(() => {
    const data = services.data;
    const [addService, setAddService] = useState(false);
    const isAdmin = useAuth().isAdmin;
    return (
        <>
         {isAdmin ? (
                <Button onClick={() => setAddService(true)}>
                <Fab color="primary" aria-label="add" sx={{
                    position: 'absolute',
                    right: '300px',
                    top: '0px', 
                }}>
                    <AddSharpIcon />
                </Fab>
            </Button>
            ) : (<></>)}
            <Grid container spacing={2}>
                {data.length > 0 &&
                    data.map((i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i.id}>
                            <StyledContainer>
                                <Service key = {i.id} {...i} />
                            </StyledContainer>
                        </Grid>
                    ))}
            </Grid>
           

            {addService && <AddService setAddService={setAddService} />}
            <Outlet />
        </>
    );
});

export default ServicesList;


