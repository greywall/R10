import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SessionsList = ({allSessions}) => (
  <SectionList
    sections={allSessions}
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => (
      <TouchableOpacity
        opacity={0.4}
        onPress={() => navigation.push('Session', [item])}>
        <View>
          <Text>{item.title}</Text>
          <View>
            <Text>{item.location}</Text>
            <Ionicons name={'ios-heart'} size={25} color={'red'} />
          </View>
        </View>
      </TouchableOpacity>
    )}
    renderSectionHeader={({section: {title}}) => (
      <Text>{moment(title).format('hh:mm a')}</Text>
    )}
  />
);

export default SessionsList;
