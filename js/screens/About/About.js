import React from 'react';
import styles from './styles';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import ConductList2 from '../../components/ConductList2';

const About = ({allConducts}) => {
  return (
    <ScrollView style={styles.about}>
      <View style={styles.aboutImageView}>
        <Image
          style={styles.aboutImage}
          source={require('../../assets/r10_logo.png')}></Image>
      </View>
      <View>
        <Text style={styles.paragraph}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>

      <View>
        <Text style={styles.heading}>Date & Venue</Text>
        <Text style={styles.paragraph}>
          The R10 Conference will take place on Tuesday, June 27, 2020 in
          Vancouver,BC.
        </Text>
      </View>

      <View>
        <Text style={styles.heading}>Code of Conduct</Text>
      </View>

      <View>
        {allConducts.map(conduct => (
          <ConductList2
            key={conduct.id}
            title={conduct.title}
            description={conduct.description}
          />
        ))}
      </View>

      <Text>Tal Grewal </Text>
    </ScrollView>
  );
};

export default About;
