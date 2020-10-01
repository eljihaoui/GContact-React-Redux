import Axios from "axios"

export const getContacts = () => async dispatch => {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: "GET_CONTACTS",
        payload: res.data
    })
}

export const getContact = (id) => async dispatch => {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: "GET_CONTACT",
        payload: res.data
    })
}
export const addContact = (contact) => async dispatch => {
    const res = await Axios.post('https://jsonplaceholder.typicode.com/users', contact);
    console.log("res : ADD_CONTACT" + res.data)
    dispatch({
        type: "ADD_CONTACT",
        payload: res.data
    })
}
export const deleteContact = (id) => async dispatch => {
    try {
        await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    } catch (error) {
        console.error("deleteContact: " + error);
    }
}

export const editContact = (contact) => async dispatch => {
    const id = contact.id;
    const res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, contact);
    console.log("res : EDIT_CONTACT" + res.data)
    dispatch({
        type: "EDIT_CONTACT",
        payload: res.data
    })
}