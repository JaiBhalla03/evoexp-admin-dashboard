import React from 'react';
import {
    AiFillBackward,
    AiOutlineCalendar,
} from 'react-icons/ai';
import {FiCreditCard, FiShoppingCart, FiStar} from 'react-icons/fi';
import {
    BsChatLeft,
    BsCurrencyDollar,
    BsKanban,
    BsPersonCircle,
    BsPlusLg,
    BsShield
} from 'react-icons/bs';
import {IoIosExit} from 'react-icons/io';
import {MdDashboard, MdOutlineSupervisorAccount} from 'react-icons/md';
import {HiOutlinePresentationChartLine} from 'react-icons/hi';
import {GrUserSettings} from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import {CgEventbrite} from "react-icons/cg";

export const gridOrderImage = (props) => (
    <div>
        <img
            className="rounded-xl h-20 md:ml-3"
            src={props.ProductImage}
            alt="order-item"
        />
    </div>
);

export const gridOrderStatus = (props) => (
    <button
        type="button"
        style={{background: props.StatusBg}}
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
        {props.Status}
    </button>
);

export const sidebarPages = [
    {
        // title: 'Dashboard',
        links: [
            {
                name: 'Dashboard',
                link: "dashboard",
                icon: <MdDashboard/>,
            },
        ],
    },

    {
        title: 'Event Management',
        links: [
            {
                name: 'Create New Event',
                link: "new-event",
                icon: <BsPlusLg/>,
            },
            {
                name: 'Currently following Event',
                link: "curr-event",
                icon: <HiOutlinePresentationChartLine/>,
            },
            {
                name: 'See Past Events',
                link: "past-event",
                icon: <AiFillBackward/>,
            },
        ],
    },
    {
        title: 'Apps',
        links: [
            {
                name: 'calendar',
                link: "calendar",
                icon: <AiOutlineCalendar/>,
            },
            {
                name: 'To Dos',
                link: "todo",
                icon: <BsKanban/>,
            },
        ],
    },
    {
        title: "Account",
        links: [
            {
                name: "Settings",
                link: "account-settings",
                icon: <GrUserSettings/>
            },
            {
                name: "Sign out",
                link: "sign-out",
                icon: <IoIosExit/>
            }
        ]
    }
];


export const kanbanGrid = [
    {
        headerText: 'To Do',
        keyField: 'Open',
        allowToggle: true
    },

    {
        headerText: 'In Progress',
        keyField: 'InProgress',
        allowToggle: true
    },

    {
        headerText: 'Testing',
        keyField: 'Testing',
        allowToggle: true,
        isExpanded: false
    },

    {
        headerText: 'Done',
        keyField: 'Close',
        allowToggle: true
    },
];


export const areaPrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    majorGridLines: {width: 0},
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    labelStyle: {color: 'gray'},
};

export const areaPrimaryYAxis = {
    labelFormat: '{value}%',
    lineStyle: {width: 0},
    maximum: 4,
    interval: 1,
    majorTickLines: {width: 0},
    minorTickLines: {width: 0},
    labelStyle: {color: 'gray'},

};
export const barPrimaryXAxis = {
    valueType: 'Category',
    interval: 1,
    majorGridLines: {width: 0},
};
export const barPrimaryYAxis = {
    majorGridLines: {width: 0},
    majorTickLines: {width: 0},
    lineStyle: {width: 0},
    labelStyle: {color: 'transparent'},
};
const areaChartData = [
    [
        {x: new Date(2002, 0, 1), y: 2.2},
        {x: new Date(2003, 0, 1), y: 3.4},
        {x: new Date(2004, 0, 1), y: 2.8},
        {x: new Date(2005, 0, 1), y: 1.6},
        {x: new Date(2006, 0, 1), y: 2.3},
        {x: new Date(2007, 0, 1), y: 2.5},
        {x: new Date(2008, 0, 1), y: 2.9},
        {x: new Date(2009, 0, 1), y: 3.8},
        {x: new Date(2010, 0, 1), y: 1.4},
        {x: new Date(2011, 0, 1), y: 3.1},
    ],
    [
        {x: new Date(2002, 0, 1), y: 2},
        {x: new Date(2003, 0, 1), y: 1.7},
        {x: new Date(2004, 0, 1), y: 1.8},
        {x: new Date(2005, 0, 1), y: 2.1},
        {x: new Date(2006, 0, 1), y: 2.3},
        {x: new Date(2007, 0, 1), y: 1.7},
        {x: new Date(2008, 0, 1), y: 1.5},
        {x: new Date(2009, 0, 1), y: 2.8},
        {x: new Date(2010, 0, 1), y: 1.5},
        {x: new Date(2011, 0, 1), y: 2.3},
    ],
    [
        {x: new Date(2002, 0, 1), y: 0.8},
        {x: new Date(2003, 0, 1), y: 1.3},
        {x: new Date(2004, 0, 1), y: 1.1},
        {x: new Date(2005, 0, 1), y: 1.6},
        {x: new Date(2006, 0, 1), y: 2},
        {x: new Date(2007, 0, 1), y: 1.7},
        {x: new Date(2008, 0, 1), y: 2.3},
        {x: new Date(2009, 0, 1), y: 2.7},
        {x: new Date(2010, 0, 1), y: 1.1},
        {x: new Date(2011, 0, 1), y: 2.3},
    ],
];

export const areaCustomSeries = [
    {
        dataSource: areaChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'USA',
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',

    },
    {
        dataSource: areaChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'France',
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',
    },
    {
        dataSource: areaChartData[2],
        xName: 'x',
        yName: 'y',
        name: 'Germany',
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',
    },
];

export const barChartData = [
    [
        {x: 'USA', y: 46},
        {x: 'GBR', y: 27},
        {x: 'CHN', y: 26},
    ],
    [
        {x: 'USA', y: 37},
        {x: 'GBR', y: 23},
        {x: 'CHN', y: 18},
    ],
    [
        {x: 'USA', y: 38},
        {x: 'GBR', y: 17},
        {x: 'CHN', y: 26},
    ],
];

export const barCustomSeries = [
    {
        dataSource: barChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Gold',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
                font: {fontWeight: '600', color: '#ffffff'},
            },
        },
    },
    {
        dataSource: barChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'Silver',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
                font: {fontWeight: '600', color: '#ffffff'},
            },
        },
    },
    {
        dataSource: barChartData[2],
        xName: 'x',
        yName: 'y',
        name: 'Bronze',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
                font: {fontWeight: '600', color: '#ffffff'},
            },
        },
    },
];
export const colorMappingData = [
    [
        {x: 'Jan', y: 6.96},
        {x: 'Feb', y: 8.9},
        {x: 'Mar', y: 12},
        {x: 'Apr', y: 17.5},
        {x: 'May', y: 22.1},
        {x: 'June', y: 25},
        {x: 'July', y: 29.4},
        {x: 'Aug', y: 29.6},
        {x: 'Sep', y: 25.8},
        {x: 'Oct', y: 21.1},
        {x: 'Nov', y: 15.5},
        {x: 'Dec', y: 9.9},
    ],
    ['#FFFF99'],
    ['#FFA500'],
    ['#FF4040'],
];

export const rangeColorMapping = [
    {
        label: '1°C to 10°C',
        start: '1',
        end: '10',
        colors: colorMappingData[1]
    },

    {
        label: '11°C to 20°C',
        start: '11',
        end: '20',
        colors: colorMappingData[2]
    },

    {
        label: '21°C to 30°C',
        start: '21',
        end: '30',
        colors: colorMappingData[3]
    },

];

export const ColorMappingPrimaryXAxis = {
    valueType: 'Category',
    majorGridLines: {width: 0},
    title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
    lineStyle: {width: 0},
    majorTickLines: {width: 0},
    minorTickLines: {width: 0},
    labelFormat: '{value}°C',
    title: 'Temperature',
};


export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: {width: 0},
    background: 'white',
};

export const LinePrimaryYAxis = {
    labelFormat: '{value}',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: {width: 0},
    majorTickLines: {width: 0},
    minorTickLines: {width: 0},
};


export const cartData = [
    {
        image:
        product5,
        name: 'butterscotch ice-cream',
        category: 'Milk product',
        price: '$250',
    },
    {
        image:
        product6,
        name: 'Supreme fresh tomato',
        category: 'Vegetable Item',
        price: '$450',
    },
    {
        image:
        product7,
        name: 'Red color candy',
        category: 'Food Item',
        price: '$190',
    },
];

export const chatData = [
    {
        image:
        avatar2,
        message: 'Roman Joined the Team!',
        desc: 'Congratulate him',
        time: '9:08 AM',
    },
    {
        image:
        avatar3,
        message: 'New message received',
        desc: 'Salma sent you new message',
        time: '11:56 AM',
    },
    {
        image:
        avatar4,
        message: 'New Payment received',
        desc: 'Check your earnings',
        time: '4:39 AM',
    },
    {
        image:
        avatar,
        message: 'Jolly completed tasks',
        desc: 'Assign her new tasks',
        time: '1:12 AM',
    },
];

export const userEventData = [
    {
        icon: <CgEventbrite/>,
        amount: '39,354',
        percentage: '-4%',
        title: 'Event Count',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
        pcColor: 'red-600',
    },
    {
        icon: <MdOutlineSupervisorAccount/>,
        amount: '4,396',
        percentage: '+23%',
        title: 'Total participants registered so far across all events',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
        pcColor: 'green-600',
    },
    {
        icon: <BsCurrencyDollar/>,
        amount: '423,39',
        percentage: '+38%',
        title: 'Total Revenue generated',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',

        pcColor: 'green-600',
    },
];

export const eventStaffDetails = [
    {
        icon: <BsPersonCircle/>,
        name: 'Aamya',
        roleAssigned: 'UI/UX',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
    {
        icon: <BsPersonCircle/>,
        name: 'Abhishek',
        roleAssigned: 'UI/UX',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
    },
    {
        icon: <BsPersonCircle/>,
        name: 'Jay',
        roleAssigned: 'Frontend + Backend',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
    },
    {
        icon: <BsPersonCircle/>,
        name: 'Ujjwal',
        roleAssigned: 'Frontend + Backend',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',
    },
    {
        icon: <BsPersonCircle/>,
        percentage: '+38%',
        name: 'Someone Else',
        roleAssigned: 'Something',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
];

export const weeklyStats = [
    {
        icon: <FiShoppingCart/>,
        amount: '-$560',
        title: 'Best Performing',
        desc: 'Johnathan Doe',
        iconBg: '#FB9678',
        pcColor: 'red-600',
    },
    {
        icon: <FiStar/>,
        amount: '-$560',
        title: 'Best Seller',
        desc: 'MaterialPro Admin',
        iconBg: 'rgb(254, 201, 15)',
        pcColor: 'red-600',
    },
    {
        icon: <BsChatLeft/>,
        amount: '+$560',
        title: 'Most Commented',
        desc: 'Ample Admin',
        iconBg: '#00C292',
        pcColor: 'green-600',
    },
];


export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        color: '#FB9678',
        name: 'orange-theme',
    },
];

export const userProfileData = [
    {
        icon: <BsCurrencyDollar/>,
        title: 'My Profile',
        desc: 'Account Settings',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
    {
        icon: <BsShield/>,
        title: 'My Inbox',
        desc: 'Messages & Emails',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
    },
    {
        icon: <FiCreditCard/>,
        title: 'My Tasks',
        desc: 'To-do and Daily Tasks',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
    },
];

export const ordersGrid = [
    {
        headerText: 'Image',
        template: gridOrderImage,
        textAlign: 'Center',
        width: '120',
    },
    {
        field: 'OrderItems',
        headerText: 'Item',
        width: '150',
        editType: 'dropdownedit',
        textAlign: 'Center',
    },
    {
        field: 'CustomerName',
        headerText: 'Customer Name',
        width: '150',
        textAlign: 'Center',
    },
    {
        field: 'TotalAmount',
        headerText: 'Total Amount',
        format: 'C2',
        textAlign: 'Center',
        editType: 'numericedit',
        width: '150',
    },
    {
        headerText: 'Status',
        template: gridOrderStatus,
        field: 'OrderItems',
        textAlign: 'Center',
        width: '120',
    },
    {
        field: 'OrderID',
        headerText: 'Order ID',
        width: '120',
        textAlign: 'Center',
    },

    {
        field: 'Location',
        headerText: 'Location',
        width: '150',
        textAlign: 'Center',
    },
];


export const ordersData = [
    {
        OrderID: 10248,
        CustomerName: 'Vinet',

        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
        product6,
    },
    {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product5,
    },
    {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product7,
    },
    {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product4,
    },
    {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
    },
    {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product2,
    },
    {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product3,
    },
    {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product4,
    },
    {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 10248,
        CustomerName: 'Vinet',

        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
        product6,
    },
    {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product5,
    },
    {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product7,
    },
    {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product4,
    },
    {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
    },
    {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product2,
    },
    {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product3,
    },
    {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product4,
    },
    {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 10248,
        CustomerName: 'Vinet',

        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
        product6,
    },
    {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product5,
    },
    {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product7,
    },
    {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product4,
    },
    {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
    },
    {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product2,
    },
    {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product3,
    },
    {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product4,
    },
    {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 10248,
        CustomerName: 'Vinet',

        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
        product6,
    },
    {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product5,
    },
    {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product7,
    },
    {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product4,
    },
    {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
    },
    {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product2,
    },
    {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product3,
    },
    {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product4,
    },
    {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 10248,
        CustomerName: 'Vinet',

        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
        product6,
    },
    {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product5,
    },
    {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product7,
    },
    {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product4,
    },
    {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
    },
    {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
        product2,
    },
    {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
        product3,
    },
    {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
        product4,
    },
    {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
];

export const scheduleData = [
    {
        Id: 1,
        Subject: 'Meeting with Abhinav',
        Location: 'evoexpo.com',
        StartTime: '2021-01-10T04:00:00.000Z',
        EndTime: '2021-01-10T05:30:00.000Z',
        CategoryColor: '#1aaa55',
    },
    {
        Id: 2,
        Subject: 'Hackathon Starts',
        Location: 'evoexpo/events/24352dadaffw4tgs',
        StartTime: '2021-01-11T06:30:00.000Z',
        EndTime: '2021-01-11T08:30:00.000Z',
        CategoryColor: '#357cd2',
    },
    {
        Id: 3,
        Subject: 'Remove Abhinav',
        Location: 'evoexpo.com',
        StartTime: '2021-01-12T04:00:00.000Z',
        EndTime: '2021-01-12T05:30:00.000Z',
        CategoryColor: '#7fa900',
    },
    {
        Id: 5,
        Subject: "New Event Preparation",
        Location: 'SJT',
        StartTime: '2021-01-14T06:30:00.000Z',
        EndTime: '2021-01-14T08:30:00.000Z',
        CategoryColor: '#00bdae',
    },
    {
        Id: 6,
        Subject: 'Hackathon Round 1 ends',
        Location: 'evoexpo.com/events/',
        StartTime: '2021-01-14T04:00:00.000Z',
        EndTime: '2021-01-14T05:30:00.000Z',
        CategoryColor: '#f57f17',
    },
    {
        Id: 7,
        Subject: 'Hackathon Round 2 ends',
        Location: 'evoexpo.com',
        StartTime: '2021-01-15T05:30:00.000Z',
        EndTime: '2021-01-15T07:00:00.000Z',
        CategoryColor: '#1aaa55',
    },
    {
        Id: 8,
        Subject: 'Hackathon ends',
        Location: 'evoexpo.com/events/',
        StartTime: '2021-01-16T03:30:00.000Z',
        EndTime: '2021-01-16T04:30:00.000Z',
        CategoryColor: '#357cd2',
    },
];

/* FIXME: put data here in the form
*   x: time intervals, most probably day
*   y: number of participants at day 1 */
export const lineChartData = [
    [
        {x: new Date(2005, 0, 1), y: 21},
        {x: new Date(2006, 0, 1), y: 24},
        {x: new Date(2007, 0, 1), y: 36},
        {x: new Date(2008, 0, 1), y: 38},
        {x: new Date(2009, 0, 1), y: 54},
        {x: new Date(2010, 0, 1), y: 57},
        {x: new Date(2011, 0, 1), y: 70},
    ],
    [
        {x: new Date(2005, 0, 1), y: 28},
        {x: new Date(2006, 0, 1), y: 44},
        {x: new Date(2007, 0, 1), y: 48},
        {x: new Date(2008, 0, 1), y: 50},
        {x: new Date(2009, 0, 1), y: 66},
        {x: new Date(2010, 0, 1), y: 78},
        {x: new Date(2011, 0, 1), y: 84},
    ],

    [
        {x: new Date(2005, 0, 1), y: 10},
        {x: new Date(2006, 0, 1), y: 20},
        {x: new Date(2007, 0, 1), y: 30},
        {x: new Date(2008, 0, 1), y: 39},
        {x: new Date(2009, 0, 1), y: 50},
        {x: new Date(2010, 0, 1), y: 70},
        {x: new Date(2011, 0, 1), y: 100},
    ],
];
export const dropdownData = [
    {
        Id: '1',
        Time: 'March 2021',
    },
    {
        Id: '2',
        Time: 'April 2021',
    }, {
        Id: '3',
        Time: 'May 2021',
    },
];
export const SparklineAreaData = [
    {x: 1, y: 2},
    {x: 2, y: 6},
    {x: 3, y: 8},
    {x: 4, y: 5},
    {x: 5, y: 10},
    {x: 6, y: 12},
    {x: 7, y: 15},
    {x: 8, y: 18},
    {x: 9, y: 20},
    {x: 10, y: 29},
    {x: 11, y: 40},
];

export const lineCustomSeries = [
    {
        dataSource: lineChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Event 1',
        width: '2',
        marker: {visible: true, width: 10, height: 10},
        type: 'Line'
    },

    {
        dataSource: lineChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'Event 2',
        width: '2',
        marker: {visible: true, width: 10, height: 10},
        type: 'Line'
    },

    {
        dataSource: lineChartData[2],
        xName: 'x',
        yName: 'y',
        name: 'Event 3',
        width: '2',
        marker: {visible: true, width: 10, height: 10},
        type: 'Line'
    },

];

export const pieChartData = [
    {x: 'Labour', y: 18, text: '18%'},
    {x: 'Legal', y: 8, text: '8%'},
    {x: 'Production', y: 15, text: '15%'},
    {x: 'License', y: 11, text: '11%'},
    {x: 'Facilities', y: 18, text: '18%'},
    {x: 'Taxes', y: 14, text: '14%'},
    {x: 'Insurance', y: 16, text: '16%'},
];

export const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
];

export const ecomPieChartData = [
    {x: 'Expense', y: 48487, text: '52%'},
    {x: 'Budget Left', y: 44951, text: '48%'},
];

export const stackedChartData = [
    [
        {x: 'Jan', y: 111.1},
        {x: 'Feb', y: 127.3},
        {x: 'Mar', y: 143.4},
        {x: 'Apr', y: 159.9},
        {x: 'May', y: 159.9},
        {x: 'Jun', y: 159.9},
        {x: 'July', y: 159.9},
    ],
    [
        {x: 'Jan', y: 111.1},
        {x: 'Feb', y: 127.3},
        {x: 'Mar', y: 143.4},
        {x: 'Apr', y: 159.9},
        {x: 'May', y: 159.9},
        {x: 'Jun', y: 159.9},
        {x: 'July', y: 159.9},
    ],
];

export const stackedCustomSeries = [

    {
        dataSource: stackedChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Budget',
        type: 'StackingColumn',
        background: 'blue',

    },

    {
        dataSource: stackedChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'Expense',
        type: 'StackingColumn',
        background: 'red',

    },

];

export const stackedPrimaryXAxis = {
    majorGridLines: {width: 0},
    minorGridLines: {width: 0},
    majorTickLines: {width: 0},
    minorTickLines: {width: 0},
    interval: 1,
    lineStyle: {width: 0},
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
};

export const stackedPrimaryYAxis = {
    lineStyle: {width: 0},
    minimum: 100,
    maximum: 400,
    interval: 100,
    majorTickLines: {width: 0},
    majorGridLines: {width: 1},
    minorGridLines: {width: 1},
    minorTickLines: {width: 0},
    labelFormat: '{value}',
};

export const kanbanData = [
    {
        Id: 'Task 1',
        Title: 'Task - 29001',
        Status: 'Open',
        Summary: 'Analyze the new requirements gathered from the customer.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Analyze,Customer',
        Estimate: 3.5,
        Assignee: 'Nancy Davloio',
        RankId: 1,
        Color: '#02897B',
        ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
        Id: 'Task 2',
        Title: 'Task - 29002',
        Status: 'InProgress',
        Summary: 'Improve application performance',
        Type: 'Improvement',
        Priority: 'Normal',
        Tags: 'Improvement',
        Estimate: 6,
        Assignee: 'Andrew Fuller',
        RankId: 1,
        Color: '#673AB8',
        ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
        Id: 'Task 3',
        Title: 'Task - 29003',
        Status: 'Open',
        Summary: 'Arrange a web meeting with the customer to get new requirements.',
        Type: 'Others',
        Priority: 'Critical',
        Tags: 'Meeting',
        Estimate: 5.5,
        Assignee: 'Janet Leverling',
        RankId: 2,
        Color: '#1F88E5',
        ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
        Id: 'Task 4',
        Title: 'Task - 29004',
        Status: 'InProgress',
        Summary: 'Fix the issues reported in the IE browser.',
        Type: 'Bug',
        Priority: 'Critical',
        Tags: 'IE',
        Estimate: 2.5,
        Assignee: 'Janet Leverling',
        RankId: 2,
        Color: '#E64A19',
        ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
        Id: 'Task 5',
        Title: 'Task - 29005',
        Status: 'Review',
        Summary: 'Fix the issues reported by the customer.',
        Type: 'Bug',
        Priority: 'Low',
        Tags: 'Customer',
        Estimate: '3.5',
        Assignee: 'Steven walker',
        RankId: 1,
        Color: '#E64A19',
        ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
        Id: 'Task 6',
        Title: 'Task - 29007',
        Status: 'Validate',
        Summary: 'Validate new requirements',
        Type: 'Improvement',
        Priority: 'Low',
        Tags: 'Validation',
        Estimate: 1.5,
        Assignee: 'Robert King',
        RankId: 1,
        Color: '#673AB8',
        ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
        Id: 'Task 7',
        Title: 'Task - 29009',
        Status: 'Review',
        Summary: 'Fix the issues reported in Safari browser.',
        Type: 'Bug',
        Priority: 'Critical',
        Tags: 'Fix,Safari',
        Estimate: 1.5,
        Assignee: 'Nancy Davloio',
        RankId: 2,
        Color: '#E64A19',
        ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
        Id: 'Task 8',
        Title: 'Task - 29010',
        Status: 'Close',
        Summary: 'Test the application in the IE browser.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Review,IE',
        Estimate: 5.5,
        Assignee: 'Margaret hamilt',
        RankId: 3,
        Color: '#02897B',
        ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
        Id: 'Task 9',
        Title: 'Task - 29011',
        Status: 'Validate',
        Summary: 'Validate the issues reported by the customer.',
        Type: 'Story',
        Priority: 'High',
        Tags: 'Validation,Fix',
        Estimate: 1,
        Assignee: 'Steven walker',
        RankId: 1,
        Color: '#02897B',
        ClassName: 'e-story, e-high, e-steven-walker',
    },
    {
        Id: 'Task 10',
        Title: 'Task - 29015',
        Status: 'Open',
        Summary: 'Show the retrieved data from the server in grid control.',
        Type: 'Story',
        Priority: 'High',
        Tags: 'Database,SQL',
        Estimate: 5.5,
        Assignee: 'Margaret hamilt',
        RankId: 4,
        Color: '#02897B',
        ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
        Id: 'Task 11',
        Title: 'Task - 29016',
        Status: 'InProgress',
        Summary: 'Fix cannot open user’s default database SQL error.',
        Priority: 'Critical',
        Type: 'Bug',
        Tags: 'Database,Sql2008',
        Estimate: 2.5,
        Assignee: 'Janet Leverling',
        RankId: 4,
        Color: '#E64A19',
        ClassName: 'e-bug, e-critical, e-janet-leverling',
    },
    {
        Id: 'Task 12',
        Title: 'Task - 29017',
        Status: 'Review',
        Summary: 'Fix the issues reported in data binding.',
        Type: 'Story',
        Priority: 'Normal',
        Tags: 'Databinding',
        Estimate: '3.5',
        Assignee: 'Janet Leverling',
        RankId: 4,
        Color: '#02897B',
        ClassName: 'e-story, e-normal, e-janet-leverling',
    },
    {
        Id: 'Task 13',
        Title: 'Task - 29018',
        Status: 'Close',
        Summary: 'Analyze SQL server 2008 connection.',
        Type: 'Story',
        Priority: 'Critical',
        Tags: 'Grid,Sql',
        Estimate: 2,
        Assignee: 'Andrew Fuller',
        RankId: 4,
        Color: '#02897B',
        ClassName: 'e-story, e-release, e-andrew-fuller',
    },
    {
        Id: 'Task 14',
        Title: 'Task - 29019',
        Status: 'Validate',
        Summary: 'Validate databinding issues.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Validation',
        Estimate: 1.5,
        Assignee: 'Margaret hamilt',
        RankId: 1,
        Color: '#02897B',
        ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
        Id: 'Task 15',
        Title: 'Task - 29020',
        Status: 'Close',
        Summary: 'Analyze grid control.',
        Type: 'Story',
        Priority: 'High',
        Tags: 'Analyze',
        Estimate: 2.5,
        Assignee: 'Margaret hamilt',
        RankId: 5,
        Color: '#02897B',
        ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
        Id: 'Task 16',
        Title: 'Task - 29021',
        Status: 'Close',
        Summary: 'Stored procedure for initial data binding of the grid.',
        Type: 'Others',
        Priority: 'Critical',
        Tags: 'Databinding',
        Estimate: 1.5,
        Assignee: 'Steven walker',
        RankId: 6,
        Color: '#1F88E5',
        ClassName: 'e-others, e-release, e-steven-walker',
    },
    {
        Id: 'Task 17',
        Title: 'Task - 29022',
        Status: 'Close',
        Summary: 'Analyze stored procedures.',
        Type: 'Story',
        Priority: 'Critical',
        Tags: 'Procedures',
        Estimate: 5.5,
        Assignee: 'Janet Leverling',
        RankId: 7,
        Color: '#02897B',
        ClassName: 'e-story, e-release, e-janet-leverling',
    },
    {
        Id: 'Task 18',
        Title: 'Task - 29023',
        Status: 'Validate',
        Summary: 'Validate editing issues.',
        Type: 'Story',
        Priority: 'Critical',
        Tags: 'Editing',
        Estimate: 1,
        Assignee: 'Nancy Davloio',
        RankId: 1,
        Color: '#02897B',
        ClassName: 'e-story, e-critical, e-nancy-davloio',
    },
    {
        Id: 'Task 19',
        Title: 'Task - 29024',
        Status: 'Review',
        Summary: 'Test editing functionality.',
        Type: 'Story',
        Priority: 'Normal',
        Tags: 'Editing,Test',
        Estimate: 0.5,
        Assignee: 'Nancy Davloio',
        RankId: 5,
        Color: '#02897B',
        ClassName: 'e-story, e-normal, e-nancy-davloio',
    },
    {
        Id: 'Task 20',
        Title: 'Task - 29025',
        Status: 'Open',
        Summary: 'Enhance editing functionality.',
        Type: 'Improvement',
        Priority: 'Low',
        Tags: 'Editing',
        Estimate: 3.5,
        Assignee: 'Andrew Fuller',
        RankId: 5,
        Color: '#673AB8',
        ClassName: 'e-improvement, e-low, e-andrew-fuller',
    },
    {
        Id: 'Task 21',
        Title: 'Task - 29026',
        Status: 'InProgress',
        Summary: 'Improve the performance of the editing functionality.',
        Type: 'Epic',
        Priority: 'High',
        Tags: 'Performance',
        Estimate: 6,
        Assignee: 'Nancy Davloio',
        RankId: 5,
        Color: '#e91e64',
        ClassName: 'e-epic, e-high, e-nancy-davloio',
    },
    {
        Id: 'Task 22',
        Title: 'Task - 29027',
        Status: 'Open',
        Summary: 'Arrange web meeting with the customer to show editing demo.',
        Type: 'Others',
        Priority: 'High',
        Tags: 'Meeting,Editing',
        Estimate: 5.5,
        Assignee: 'Steven walker',
        RankId: 6,
        Color: '#1F88E5',
        ClassName: 'e-others, e-high, e-steven-walker',
    },
    {
        Id: 'Task 23',
        Title: 'Task - 29029',
        Status: 'Review',
        Summary: 'Fix the editing issues reported by the customer.',
        Type: 'Bug',
        Priority: 'Low',
        Tags: 'Editing,Fix',
        Estimate: '3.5',
        Assignee: 'Janet Leverling',
        RankId: 6,
        Color: '#E64A19',
        ClassName: 'e-bug, e-low, e-janet-leverling',
    },
    {
        Id: 'Task 24',
        Title: 'Task - 29030',
        Status: 'Testing',
        Summary: 'Fix the issues reported by the customer.',
        Type: 'Bug',
        Priority: 'Critical',
        Tags: 'Customer',
        Estimate: '3.5',
        Assignee: 'Steven walker',
        RankId: 1,
        Color: '#E64A19',
        ClassName: 'e-bug, e-critical, e-steven-walker',
    },
    {
        Id: 'Task 25',
        Title: 'Task - 29031',
        Status: 'Testing',
        Summary: 'Fix the issues reported in Safari browser.',
        Type: 'Bug',
        Priority: 'Critical',
        Tags: 'Fix,Safari',
        Estimate: 1.5,
        Assignee: 'Nancy Davloio',
        RankId: 2,
        Color: '#E64A19',
        ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
];

export const PyramidData = [
    {x: 'Sweet Treats', y: 120, text: '120 cal'},
    {x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal'},
    {x: 'Vegetables', y: 470, text: '470 cal'},
    {x: 'Meat, Poultry, Fish', y: 475, text: '475 cal'},
    {x: 'Fruits', y: 520, text: '520 cal'},
    {x: 'Bread, Rice, Pasta', y: 930, text: '930 cal'},
];
