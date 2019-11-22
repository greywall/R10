import React, {Component} from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import {Session_DATA} from '../../config/api';
import {Text} from 'react-native';

class SessionContainer extends Component {
  render() {
    const id = this.props.navigation.getParam('id');
    return (
      <Query variables={{id}} query={Session_DATA}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error.message}/</Text>;

          if (data) {
            return (
              <Session
                session={data.Session}
                navigation={this.props.navigation}
              />
            );
          }
          console.log(data);
        }}
      </Query>
    );
  }
}

export default SessionContainer;
