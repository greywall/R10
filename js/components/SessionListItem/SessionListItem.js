import React from 'react';
import {TouchableOpacity, SectionList, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

const SessionListItem = ({item, navigation}) => (
  <TouchableOpacity
    opacity={0.4}
    onPress={() => navigation.navigate('Session', [item])}>
    <View>
      <Text>{item.title}</Text>
      <View>
        <Text>{item.location}</Text>
        <Ionicons name={'ios-heart'} size={25} color={'red'} />
      </View>
    </View>
  </TouchableOpacity>
);

export default withNavigation(SessionListItem);
