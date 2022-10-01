const ADMIN_URL = adminID => {
    return `https://evoexpo-backend-api.herokuapp.com/api/admin/${adminID}`;
}

const EVENT_URL = eventID => {
    return `https://evoexpo-backend-api.herokuapp.com/api/events/${eventID}`;
}


export const getAdminData = async (adminID, callback) => {
    const res = await fetch(ADMIN_URL(adminID));
    if (res.ok) {
        const data = await res.json();
        callback(data.foundAdmin);
    } else {
        console.log("Not successful to get admin data " + adminID)
    }
}

export const getEventData = async (eventID, callback) => {
    const res = await fetch(EVENT_URL(eventID));
    if (res.ok) {
        const data = await res.json();
        callback(data.foundEvent);
    } else {
        console.log("Not successful to get event data " + eventID);
    }
}