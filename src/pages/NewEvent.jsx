import React, {useState} from 'react';
import {Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TiTick} from "react-icons/ti";
import {useFormik} from 'formik';


const DynamicFields = (props) => {
    const [formVals, setFormVals] = useState({
        formValues: [{heading: "", desc: ""}]
    })

    const handleChange = (i, e) => {
        let {formValues} = formVals;
        formValues[i][e.target.heading] = e.target.heading;
        setFormVals({formValues});
    };

    const addFormFields = () => {
        setFormVals(
            (prevState => ({
                formValues: [...prevState.formValues, {heading: "", desc: ""}]
            }))
        );
    };

    const removeFormFields = i => {
        let {formValues} = formVals;
        formValues.splice(i, 1);
        setFormVals({formValues});
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(JSON.stringify(formVals));
    };

    return (
        <form onSubmit={handleSubmit}>
            {formVals.formValues.map((element, index) => (
                <div key={index}>
                    <label>Heading</label>
                    <input
                        type="text"
                        name={"heading"}
                        value={element.heading || ""}
                        onChange={e => handleChange(index, e)}
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        name={"desc"}
                        value={element.desc || ""}
                        onChange={e => handleChange(index, e)}
                    />
                    {
                        index && <button type={"button"} onClick={() => removeFormFields(index)}>Remove</button>
                    }
                </div>
            ))}
            <div className="button-section">
                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                <button className="button submit" type="submit">Submit</button>
            </div>
        </form>
    );
};


function NewEvent(props) {
    fetch("https://evoexpo-backend-api.herokuapp.com/api/events", {
        method: "POST",
        body: JSON.stringify({userID: "someone"})
    })
        .then(res => res.json())
        .then(data => {
            console.log("Success: ", data)
        })
        .catch(error => {
            console.log("Error: ", error);
        });
    const formik = useFormik({
        initialValues: {
            title: "",
            type: "",
            eventAccess: "",
            startingDate: "",
            endDate: "",
            time: "",
            duration: "",
            platform: "",
            venue: "",
            capacity: 0,
            instaLink: "",
            githubLink: "",
            facebookLink: "",
            description: "",
            other: [],
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formik.values);
    };

    return (
        <Grid className={"m-24 p-20 pt-0 mt-10"}>
            <Typography variant="h2" gutterBottom>
                Create New Event
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit} sx={{mt: 1}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="title"
                            name="title"
                            label="Title of Event"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl sx={{minWidth: 150}}>
                            <InputLabel id="type-label-id">Type Of Event</InputLabel>
                            <Select
                                fullWidth
                                label="Type of Event"
                                labelId="type-label-id"
                                id="type-of-event"
                                name={"type"}
                                value={formik.values.type}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value={"hackathon"}>Hackathon</MenuItem>
                                <MenuItem value={"job-fare"}>Job Fare</MenuItem>
                                <MenuItem value={"webinar"}>Webinar</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Starting Date of Event"
                                id={"startingDate"}
                                name={"startingDate"}
                                value={formik.values.startingDate}
                                onChange={(value) => {
                                    formik.setFieldValue('startingDate', Date.parse(value));
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="End Date of Event"
                                id={"endDate"}
                                name={"endDate"}
                                value={formik.values.endDate}
                                onChange={(value) => {
                                    formik.setFieldValue('endDate', Date.parse(value));
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <TiTick/> This event will take place on _____ from ____ until_____.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl sx={{minWidth: 200}}>
                            <InputLabel id="platform-label">Platform Of Event</InputLabel>
                            <Select
                                required
                                fullWidth
                                id="platform"
                                labelId="platform-label"
                                name="platform"
                                label="Platform"
                                variant="outlined"
                                value={formik.values.platform}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value={"virtual"}>Virtual</MenuItem>
                                <MenuItem value={"non-virtual"}>Non-Virtual</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="venue"
                            name="venue"
                            label="Venue"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.venue}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="capacity"
                            name="capacity"
                            label="Capacity"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.capacity}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id={"description"}
                            name={"description"}
                            label={"description"}
                            fullWidth
                            variant={"outlined"}
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                    </Grid>
                </Grid>
                <button type={"submit"}>Submit</button>
            </Box>
            <DynamicFields/>
        </Grid>


    );
}

export default NewEvent;