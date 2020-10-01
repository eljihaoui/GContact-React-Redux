const initialState = {
    contacts: [],
    contact: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_CONTACTS':
            return {
                ...state,  // ou return state
                contacts: action.payload
            }
        case 'GET_CONTACT':
            return {
                ...state,  // ou return state
                contact: action.payload
            }
        case "EDIT_CONTACT":
            return {
                ...state,
                contacts: state.contacts
                .map(contact => contact.id !== action.payload.id ? (contact = action.payload) : contact)
                
            }
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default: {
            return state;
        }
    }
}