import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';
class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts(); /*2*/
  } 
  render() {
    const { contacts } = this.props;//2 this.props contains contacts
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.MyContact.contacts //2
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getContacts: () => {
//       dispatch({
//         type: 'GET_CONTACTS'
//       })
//     }
//   }
// }
export default connect(mapStateToProps, { getContacts/*2*/ })(Contacts);
