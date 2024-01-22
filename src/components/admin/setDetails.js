import React  from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import details from "../store/details";
import { Button, TextField } from "@mui/material";
import { DialogContentText, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const SetDetails = observer(() => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    }
    function submitDetails(data) {
        details.addDetails(data);
    }
    const { register, handleSubmit } = useForm();
    return (<>

        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Set details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To set the details, fill all the details and to finish - click on submit.
                    </DialogContentText>
                    <form onSubmit={handleSubmit(submitDetails)} >
                        <br />
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
                            {...register("address")}
                            margin="dense"
                            id="address"
                            label="Address"
                            type="text"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            {...register("phone")}
                            margin="dense"
                            id="phone"
                            label="Phone"
                            type="text"
                            variant="standard"
                        />
                        <br/><br/>
                        <TextField
                            {...register("owner")}
                            margin="dense"
                            id="owner"
                            label="Owner"
                            type="text"
                            variant="standard"
                        />
                        <br/>
                        <TextField
                            {...register("description")}
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            variant="standard"
                        />
                        <br/>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={handleClose}>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>


    </>)
})
export default SetDetails;