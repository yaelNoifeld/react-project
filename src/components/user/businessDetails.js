import { observer } from 'mobx-react';
import details from '../store/details';
import { Container, Card, Button } from '@mui/material';
import SetDetails from '../admin/setDetails';
import { useAuth } from '../authContex';
import ModeIcon from '@mui/icons-material/Mode';
import { useState } from 'react';

const BusinessDetails = observer(() => {
    const data = details.data || {};
    const isAdmin = useAuth().isAdmin;
    const [isDetails, setIsDetails]=useState(false);
    return (
        <>
            <Card variant="contained" sx={{ color: "blue" }} >
                <Container maxWidth="sm" >
                    <p>name: {data.name}</p>
                    <p>address: {data.address}</p>
                    <p>phone: {data.phone}</p>
                    <p>owner: {data.owner}</p>
                    <p>description: {data.description}</p>
                </Container>
                <Container>
                    {isAdmin ? (<Button  
                     style={{ textDecoration: 'none' }} onClick={() =>
                        setIsDetails(true)}><ModeIcon/>set details</Button>) : (<></>)}
                </Container>
            </Card>
            {isDetails && <SetDetails />}
        </>
    );
});

export default BusinessDetails;
