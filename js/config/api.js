import ApolloClient from 'apollo-boost';
var {graphql, buildSchema} = require('graphql');
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

export default new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

const ALL_DATA = gql`
  query {
    allSessions {
      id
      description
      location
      speaker {
        id
        bio
        image
        name
        url
      }
      startTime
      title
    }
  }
`;

module.exports = ALL_DATA;
