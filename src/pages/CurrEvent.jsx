import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import {getAdminData, getEventData} from "../dataFetcher";


function CurrEvent(props) {
    const [eventData, setEventData] = useState({});
    getAdminData("63380b54f0c542eb6c2cff28", ({listOfEvents}) => {
        const data = JSON.parse(listOfEvents[0]);
        getEventData(data[0], e => {
            setEventData(e);
        })
    });
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className='flex justify-center bg-white w-96 h-[20vh] dark:text-gray-200 dark:bg-secondary-dark-bg 
            md:w-full m-5 p-4 rounded-2xl'>
                <div>
                    <h4 className='flex flex-col justify-center font-sans text-center w-1/3 text-3xl'>Title</h4>
                    <p>{eventData.title}</p>
                </div>
                <div>
                    <div className='flex flex-col justify-center font-sans text-center w-2/3 text-3xl'>Counter</div>

                </div>
            </div>
            <div className='flex bg-white w-96 h-[20vh] dark:text-gray-200 dark:bg-secondary-dark-bg 
            md:w-full m-5 p-4 pt-9 rounded-2xl'>
                <div>
                    <div className='flex flex-col justify-center font-sans text-center w-1/3 text-3xl'>Budget</div>
                    <span>{eventData.budget}</span>
                </div>
                <div>
                    <div className='flex flex-col justify-center font-sans text-center w-1/3 text-3xl'>Expense</div>
                    <span>{eventData.expenses}</span>
                </div>
                <div>
                    <div className='flex flex-col justify-center font-sans text-center w-1/3 text-3xl'>Participant count
                    </div>
                    <span>{eventData.currParticipantCount}</span>
                </div>
            </div>
            <div className="flex w-full">
                <div className="flex flex-col w-2/5">
                    <div className="flex bg-white h-[40vh] dark:text-gray-200 dark:bg-secondary-dark-bg 
                    w-9/10 m-5 p-4 rounded-2xl">
                        <h2 className="font-sans text-center w-full text-2xl">Staff of Event</h2>
                        <>
                            {}
                        </>
                    </div>
                    <div className="flex bg-white h-[13vh] dark:text-gray-200 dark:bg-secondary-dark-bg 
                    w-9/10 m-5 p-4 rounded-2xl">Add More Roles
                    </div>
                </div>
                <div className="flex flex-col bg-white h-[60vh] dark:text-gray-200 dark:bg-secondary-dark-bg 
                w-3/5 m-5 p-4 rounded-2xl">
                    <h2 className="font-sans text-center w-full text-2xl">Utility options</h2>
                    <div className="flex flex-col justify-around h-[50vh]">
                        <span className="text-xl text-indigo-400 underline decoration-solid hover:text-indigo-600">
                            <Link to="/editEvent">Edit this event</Link>
                        </span>
                        <span className="text-xl text-indigo-400 underline decoration-solid hover:text-indigo-600">
                            <Link to="/createPage">Create Landing Page/ edit Landing page</Link>
                        </span>
                        <span className="text-xl text-indigo-400 underline decoration-solid hover:text-indigo-600">
                            <Link to="/allParticipant">See the list of all the participants</Link>
                        </span>
                        <span className="text-xl text-indigo-400 underline decoration-solid hover:text-indigo-600">
                            <Link to="/analytics">See the analytics of the current event</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrEvent;