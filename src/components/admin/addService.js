import React from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from "@mui/material";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import services from "../store/services";
import { useState } from "react";
import { observer } from "mobx-react";


const AddService = observer(() => {
    const [open, setOpen] = useState(true);
    
    const handleClose = () => {
        setOpen(false);
    }
    function addNewService(data) {
        services.addService(data);
    };

    const { register, handleSubmit } = useForm();
    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add service</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add service, fill all the details and to finish - click on submit.
                    </DialogContentText>
                    <form onSubmit={handleSubmit(addNewService)}>
                        <TextField
                            {...register("name")}
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            variant="standard"
                        />

                        <br />
                        <TextField
                            {...register("description")}
                            margin="dense"
                            id="description"
                            label="description"
                            type="text"
                            variant="standard"
                        />

                        <br />
                        <TextField
                            {...register("price")}
                            margin="dense"
                            id="price"
                            label="Price"
                            type="number"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            {...register("duration")}
                            margin="dense"
                            id="duration"
                            label="Duration"
                            type="number"
                            variant="standard"
                        />
                        <Outlet />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={handleClose}>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </React.Fragment>

    )
})
export default AddService;


