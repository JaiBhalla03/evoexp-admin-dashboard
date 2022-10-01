import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import {GoPrimitiveDot} from 'react-icons/go';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {ChartsHeader, LineChart, Pie, SparkLine} from '../components';
import {
    dropdownData,
    userEventData,
    ecomPieChartData,
    eventStaffDetails,
    SparklineAreaData,
    weeklyStats
} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const userId = '63380b08f0c542eb6c2cff26'
const url =`https://evoexpo-backend-api.herokuapp.com/api/admin/${userId}`



const DropDown = ({currentMode}) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{text: 'Time', value: 'Id'}}
                               style={{border: 'none', color: (currentMode === 'Dark') && 'white'}} value="1"
                               dataSource={dropdownData} popupHeight="220px" popupWidth="120px"/>
    </div>
);

const Dashboard = () => {
    const [eventCount, setEventCount] = useState('0')
    const fetchData = async()=>{
        try{
            const response = await Axios(url);
            console.log(response.data.foundAdmin);
            setEventCount(response.data.foundAdmin.eventCount)
        }
        catch(error){
            console.log(error.response)
        }
        };
        useEffect(()=>{
            fetchData()
        },[])
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1
              }
            }
          ]
        };
    const {currentColor, currentMode} = useStateContext();

    return (
        <div className="mt-24">
            <div className="flex flex-wrap lg:flex-nowrap m-3 justify-center gap-1 items-center">
                {userEventData.map((item) => (
                    <div key={item.title}
                        className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  
                        p-4 pt-9 rounded-2xl"
                    >
                        <button
                            type="button"
                            style={{color: item.iconColor, backgroundColor: item.iconBg}}
                            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                        >
                            {item.icon}
                        </button>
                        <p className="mt-3">
                            <span className="text-lg font-semibold"> {item.amount} </span>
                            <span className={`text-sm text-${item.pcColor} ml-2`}> {item.percentage} </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1"> {item.title} </p>
                    </div>
                ))}
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                    <p className="font-semibold text-xl">Currently following event name</p>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className="text-3xl font-semibold">$93,438</span>
                                    <span
                                        className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs"
                                    >
                                    25%
                                  </span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p className="text-3xl font-semibold">$48,487</p>
                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>
                            <div className="flex items-center gap-4 mt-10">
                                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                    <span> <GoPrimitiveDot/> </span>
                                    <span>Budget Left</span>
                                </p>
                                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                    <span> <GoPrimitiveDot/> </span>
                                    <span>Expense</span>
                                </p>
                            </div>
                            <div className="w-40">
                                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="200px"/>
                            </div>
                        </div>

                        <div className="mt-5">
                            <ChartsHeader category="New Participants"/>
                            <div className="w-full">
                                <SparkLine
                                    currentColor={currentColor}
                                    id="area-sparkLine"
                                    height="300px"
                                    type="Area"
                                    data={SparklineAreaData}
                                    width="400"
                                    color="rgb(242, 252, 253)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 flex-wrap justify-center h-[75vh]">
                <div className="flex flex-col justify-between h-full bg-white dark:text-gray-200 
                dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className="eventSlider">
                <h2 className="text-xl font-semibold">Past Events</h2>
                <div className="h-[60vh] mt-10">
                    <Slider {...settings} style={{display: 'flex'}}>
                    {cards.map((card) => (
                    <Grid item key={card}>
                        <Card
                            sx={{height: '80%', display: 'flex', flexDirection: 'column', m: 1, borderRadius: 5}}
                        >
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Heading
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image="https://source.unsplash.com/random"
                                alt="random"
                            />
                            {/* <CardActions>
                                <Button size="small">View</Button>
                                <Button size="small">Edit</Button>
                            </CardActions> */}
                        </Card>
                    </Grid>
                ))}
                    </Slider>
                </div>
            </div>
            </div>
            </div>
            

            <div className={"mt-10 flex justify-center"}>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Participants Overview across all events</p>
                    </div>
                    <div className="md:w-full overflow-auto">
                        <LineChart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
