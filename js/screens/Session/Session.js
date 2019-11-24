import React from 'react';
import {
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import moment from 'moment';
import {SPEAKER_QUERY} from '../../config/api';
import Query from 'react-apollo';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSessionId,
  removeFaveSessionId,
}) => {
  return (
    <ScrollView>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{moment(session.startTime).format('h:mm A')}</Text>
      <Text>{session.description}</Text>
      <Text>Presented by:</Text>
      <View>
        <Image
          style={styles.speakerImage}
          source={{uri: session.speaker.image}}
        />
        <Text>{session.speaker.name}</Text>
      </View>

      <View>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <TouchableOpacity>
            <Text>Remove from Faves</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Session;
