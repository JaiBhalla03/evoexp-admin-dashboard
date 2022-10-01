import {useFormik} from 'formik'

import dp from '../data/avatar.jpg'
import {Grid, TextField, Button, FormControl,MenuItem, Select, InputLabel} from '@mui/material'

const scoreData=["1", "2", "3", "4","5"]

function AccountSettings({name, email, contact,image}) {
    const formik = useFormik({
        initialValues: {
            name, email, contact, image
        },
        onSubmit: (values) =>{
            console.log(values)
        }
    })

    return (
        <>
        <div className="p-10 flex h-90h justify-center items-center">
            <div className="flex flex-col bg-white w-96 h-100h dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full  p-4 pt-9 rounded-2xl">
                <h2 className='font-sans text-center text-3xl'>Edit Profile</h2>
                <form className="flex flex-col justify-items-stretch place-items-center" onSubmit={formik.handleSubmit}>
                <img src={dp} className="m-5 h-40 w-40 rounded-full"/>
                <div className="flex justify-between w-3/5 m-5">
                    <TextField  id="name" name="image" value={formik.values.image} onChange={formik.handleChange} label="Avatar Image" place variant="outlined" className="m-10"/>
                    <TextField  id="name" name="name" value={formik.values.name} onChange={formik.handleChange} label="Name" place variant="outlined" className="m-10"/>
                </div>
                <div className="flex justify-between w-3/5 m-5">
                    <TextField id="email" name="email" value={formik.values.email} onChange={formik.handleChange} label="Email" place variant="outlined" />
                    <TextField id="contact" name="contact" value={formik.values.contact} onChange={formik.handleChange} label="Contact no." place variant="outlined" />
                </div>    
                <Button  type="submit" variant="contained">Submit</Button>
                </form>   
            </div>
        </div>
        <div className="p-10 flex h-[65vh] justify-center items-center">
            <div className="flex flex-col h-full place-items-center bg-white w-96 h-100h dark:text-gray-200 dark:bg-secondary-dark-bg 
            md:w-full  p-4 pt-9 rounded-2xl">
                <h2 className='font-sans text-center text-3xl'>Delete Past Events</h2>
                <form className="flex justify-between place-items-center w-4/5 h-[65vh] m-5" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col justify-between h-[30vh]">
                        <FormControl>
                        <InputLabel>Choose An Event</InputLabel>
                        <Select style={{width: 200}}>
                            {scoreData.map((scoreValue)=>{
                            return <MenuItem value={scoreValue}>{scoreValue}</MenuItem>
                            })}
                        </Select>
                        </FormControl>
                        <Button variant='contained' color='error' type='submit' style={{width: 200}}>Delete Event</Button>
                    </div>
                    <div className="flex flex-col justify-start h-[30vh] w-2/5">
                        <h2 className='font-sans text-center text-2xl'>Description</h2>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                    </div>
                </form>   
            </div>
        </div>
        </>
        
    );
}

export default AccountSettings;