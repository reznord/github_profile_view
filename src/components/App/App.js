import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import * as storeSelector from './../../store/storeSelector';
import * as userApi from './../../api/userApi';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleAPIRequest = debounce(this.handleAPIRequest.bind(this), 250);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.getUserFollowers(nextProps.userData.login);
  }

  handleOnChange = (e) => {
    if (e.target.value !== '') {
      this.handleAPIRequest(e.target.value);
    }
  }

  handleAPIRequest = (value) => {
    const { getUserDetails } = this.props;
    getUserDetails(value);
  }

  render() {
    const { userData } = this.props;

    return (
      <div>
        <section className="user-input">
          <span className="input-desc">Please enter the github username: </span>
          <input
            autoFocus
            type="text"
            className="input-field"
            placeholder="please enter a username"
            onChange={e => this.handleOnChange(e)}
          />
        </section>
        <section className="user-data">
          <div className="user-image">
            {userData.avatar_url ?
              <img alt="" className="image" src={userData.avatar_url} />
              :
              null
            }
          </div>
          {!isEmpty(userData) === true ?
            <div className="user-details">
              <div className="data">
                Name: {userData.name ? userData.name : ''}
              </div>
              <div className="data">
                Username: {userData.login ? userData.login : ''}
              </div>
              <div className="data">
                Email: {userData.email !== '' ? userData.email : ''}
              </div>
              <div className="data">
                Company: {userData.company ? userData.company : ''}
              </div>
              <div className="data">
                <div className="followers-count">
                  Followers: {userData.followers ? userData.followers : 0}
                </div>
              </div>
              <div className="data">
                Following: {userData.following ? userData.following : 0}
              </div>
            </div>
            :
            null
          }
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userData = storeSelector.getUserData(state);
  const followersData = storeSelector.getUserFollowers(state);
  return {
    userData,
    followersData,
  };
}

export default connect(mapStateToProps, Object.assign({}, userApi, {}))(App);
