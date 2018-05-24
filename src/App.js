import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { removeEmail } from './store/email.js'
import AddEmailForm from './addEmailForm.js'
class App extends Component {
  constructor() {
    super()
    this.state = { email: "" }
  }
  render() {
    const {
      emails,
      dispatch,
      state,
    } = this.props;
    return (
      <div>
        <AddEmailForm />
        <ol>
          {emails.map(email => (
            <li key={email}>
              {email}
              <button onClick={() => dispatch(removeEmail(email))}>
                remove
            </button>
            </li>
          ))}
        </ol>
        <hr />
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  emails: state.email.emails,
  state: state,
})
export default connect(mapStateToProps)(App);