import React from 'react';
import {useFormik} from "formik";
import {Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {DateTimePicker, LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TiTick} from "react-icons/ti";

function NewEvent(props) {
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
        <div className={"m-24 p-20 pt-0 mt-10"}>
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
        </div>
    );
}

export default NewEvent;