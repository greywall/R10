import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

export default new ApolloClient({
  uri: 'https://r10.academy.red/graphql',
});

export const ALL_DATA_QUERY = gql`
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

export const Session_DATA = gql`
  query session($id: ID!) {
    Session(id: $id) {
      id
      description
      location
      startTime
      title
      speaker {
        id
        name
        image
        bio
        url
      }
    }
  }
`;

export const CONDUCT_QUERY = gql`
  query {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
