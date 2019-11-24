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
import {colors, typography} from '../../config/styles';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSessionId,
  removeFaveSessionId,
}) => {
  return (
    <ScrollView style={styles.sessionPage}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{session.location}</Text>

        <Icon name={'ios-heart'} size={25} color="red" />
        {/* {faveIds.includes(session.id) ? (
          <Icon name={'ios-heart'} size={25} color="red" />
        ) : null} */}
      </View>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.time}>
        {moment(session.startTime).format('h:mm A')}
      </Text>
      <Text style={styles.description}>{session.description}</Text>

      {session.speaker ? (
        <View>
          <Text style={styles.speakerText}>Presented by:</Text>
          <View style={styles.speakerContainer}>
            <Image
              style={styles.speakerImage}
              source={{uri: session.speaker.image}}
            />
            <Text style={styles.speakerName}>{session.speaker.name}</Text>
          </View>
        </View>
      ) : null}

      <View style={styles.button}>
        <LinearGradient
          colors={[colors.purple, colors.blue]}
          start={{x: 0.0, y: 0.9}}
          end={{x: 2.2, y: 0.1}}
          style={styles.buttonStyle}>
          <TouchableOpacity onPress={() => addFaveSessionId(session.id)}>
            <Text style={styles.buttonText}>Remove from Faves</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Session;
