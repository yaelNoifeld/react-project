import { observer } from "mobx-react";
import { Grid, Box } from '@mui/material';
import Meeting from './meeting'
import { styled } from '@mui/system';
import { Outlet } from "react-router-dom";
import appointments from "../store/appointments";

const StyledContainer = styled(Box)({
    backgroundColor: '#e1f5fe',
    padding: '10px',
    borderRadius: '5px',
    margin: '70px'
});

const MeetingsList = observer(() => {
    const data = appointments.data;
    let dataSort = data.slice().sort((a, b) => Date.parse(a.dateTime) - Date.parse(b.dateTime));

    return (
        <>
            <Grid container spacing={2}>
                {dataSort.length > 0 &&
                    dataSort.map((i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i.id}>
                            <StyledContainer>
                                <Meeting key={i.id} {...i} />
                            </StyledContainer>
                        </Grid>
                    ))}
            </Grid>
            <Outlet />
        </>
    );
});

export default MeetingsList;
