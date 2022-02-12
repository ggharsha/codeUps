import axios from 'axios';

export const fetchAllInboxes = (userId)=>{
    return axios.get(`/api/inbox/`, userId)
}

export const createInbox = (inbox)=>{
    return axios.post(`/api/inbox/new`, inbox)
}

export const updateInbox = (inbox) => {
    return axios.patch(`/api/inbox/update`, inbox)
}