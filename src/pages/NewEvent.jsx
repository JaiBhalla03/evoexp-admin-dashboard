import React from 'react';
import {useFormik} from "formik";
import {Box, FormControl, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {DateTimePicker, LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TiTick} from "react-icons/ti";
import Axios from "axios";

function NewEvent(props) {
    // adminID: String,
    // socials: Object,
    // sponsors: Object,
    //         currParticipantCount: Number,
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            imageLink: String,
            publicOrPrivate: String,
            budget: Number,
            expenses: Number,
            startingDate: "",
            endDate: "",
            venue: "",  // actual place or link
            landingPageLink: "",
            capacity: 0,
            others: [],
            type: "",
            instaLink: "",
            githubLink: "",
            facebookLink: "",
            sponsors: "",
            other: [],
        }
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://evoexpo-backend-api.herokuapp.com/api/events/", {
            ...formik.values
        }).then(res => {
            console.log(res.data);
        })
        console.log(formik.values);
    };

    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center bg-white w-96 h-full dark:text-gray-200 dark:bg-secondary-dark-bg 
            md:w-full m-5 p-4 rounded-2xl">
                <h2 className='font-sans text-center text-3xl'>Create New Event</h2>
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
                            <TextField
                                required
                                id="description"
                                name="description"
                                label="Description of Event"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="imageLink"
                                name="imageLink"
                                label="Image Link for Event"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.imageLink}
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
                                    name={"publicOrPrivate"}
                                    value={formik.values.publicOrPrivate}
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={"public"}>Public</MenuItem>
                                    <MenuItem value={"private"}>Private</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="budget"
                                name="budget"
                                label="Budget"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.budget}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="expenses"
                                name="expenses"
                                label="expenses"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.expenses}
                            />
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
                            <TextField
                                id="landing-page-link"
                                name="landingPageLink"
                                label="Landing page link"
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.landingPageLink}
                            />
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
                    <Button type="submit" variant="contained">Submit</Button>
                </Box>
            </div>
        </div>

    );
}

export default NewEvent;