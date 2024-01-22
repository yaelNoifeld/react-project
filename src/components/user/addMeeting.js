import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import appointments from '../store/appointments';
import { observer } from 'mobx-react';
import { Outlet } from 'react-router-dom';

const AddMeeting = observer((props) => {
    const [open, setOpen] = useState(true);
    // const { setDateOk } = props;
    // const [secondTime, setSecondTime] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    function addNewMeeting(meeting) {
        console.log('Adding meeting:', meeting);
        appointments.addMeeting(meeting);
    }

    const { register, handleSubmit } = useForm();
    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add meeting</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add meeting, fill all the details and in the finish click submit.
                    </DialogContentText>
                    <form onSubmit={handleSubmit(addNewMeeting)}>
                        <TextField
                            {...register('serviceType', { required: 'Service type is required' })}
                            id="serviceType"
                            label="Service type"
                            fullWidth
                            variant="standard"
                        />
                        {/* {errors?.serviceType && <p>{errors?.serviceType?.message}</p>} */}

                        <TextField
                            {...register('dateTime', { required: 'Date is required' })}
                            id="dateTime"
                            label="Date"
                            fullWidth
                            type="datetime-local"
                            variant="standard"
                        />
                        {/* {errors?.date && <p>{errors?.date?.message}</p>} */}

                        <TextField
                            {...register('clientName', { required: 'Client name is required' })}
                            id="clientName"
                            label="Name"
                            fullWidth
                            variant="standard"
                        />
                        {/* {errors?.clientName && <p>{errors?.clientName.message}</p>} */}

                        <TextField
                            {...register('clientPhone', { required: 'Phone number is required', pattern: /^[0-9]{10}$/ })}
                            id="clientPhone"
                            label="Phone"
                            type="number"
                            fullWidth
                            variant="standard"
                        />
                        {/* {errors?.clientPhone && <p>{errors?.clientPhone.message}</p>} */}

                        <TextField
                            {...register('clientEmail', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                            id="clientEmail"
                            label="Email Address"
                            type="email"
                            variant="standard"
                            fullWidth
                        />
                        {/* {errors?.clientEmail && <p>{errors?.clientEmail.message}</p>} */}
                        <Outlet />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" >Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>

    );
})


export default AddMeeting;


