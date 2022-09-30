import React from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';

import {Button, ChartsHeader, LineChart, Pie, SparkLine} from '../components';
import {
    dropdownData,
    userEventData,
    ecomPieChartData,
    eventStaffDetails,
    SparklineAreaData,
    weeklyStats
} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';

const DropDown = ({currentMode}) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{text: 'Time', value: 'Id'}}
                               style={{border: 'none', color: (currentMode === 'Dark') && 'white'}} value="1"
                               dataSource={dropdownData} popupHeight="220px" popupWidth="120px"/>
    </div>
);

const Dashboard = () => {
    const {currentColor, currentMode} = useStateContext();

    return (
        <div className="mt-24">
            <div className="flex flex-wrap lg:flex-nowrap m-3 justify-center gap-1 items-center">
                {userEventData.map((item) => (
                    <div key={item.title}
                         className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl"
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

            <div className="mt-10 flex gap-10 flex-wrap justify-center item-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Event Staff</p>
                    </div>
                    <div className="mt-10 w-72 md:w-400">
                        {eventStaffDetails.map((item, index) => (
                            <div key={index} className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{
                                            color: item.iconColor,
                                            backgroundColor: item.iconBg,
                                        }}
                                        className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-400">{item.roleAssigned}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        <div className="mt-3">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Add"
                                borderRadius="10px"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center">
                        <div
                            className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                            <div className="flex justify-between">
                                <p className="text-xl font-semibold">Weekly Stats</p>
                            </div>
                            <div className="mt-10 ">
                                {weeklyStats.map((item) => (
                                    <div key={item.title} className="flex justify-between mt-4 w-full">
                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                style={{background: item.iconBg}}
                                                className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                            >
                                                {item.icon}
                                            </button>
                                            <div>
                                                <p className="text-md font-semibold">{item.title}</p>
                                                <p className="text-sm text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                        <p className={`text-${item.pcColor}`}>{item.amount}</p>
                                    </div>
                                ))}
                            </div>
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
