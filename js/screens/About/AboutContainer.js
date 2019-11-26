import React from 'react';
import {Text} from 'react-native';
import About from './About';
import styles from './styles';
import {CONDUCT_QUERY} from '../../config/api';
import {Query} from 'react-apollo';
import Loader from '../../components/Loader';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  staticNavigationOption = {
    title: 'About',
  };
  render() {
    return (
      <Query query={CONDUCT_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;

          if (data) {
            return <About allConducts={data.allConducts} />;
          }

          return <Text>Loading</Text>;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
