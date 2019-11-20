import React from 'react';
import {Text, ScrollView, View, Button} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    <ScrollView>
      <Text>Schedule</Text>
      <View>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.push('Session', {
              itemId: 'hello',
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default Schedule;
