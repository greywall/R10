import React from 'react';
import {Text, View, ScrollView, Image, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {isTemplateElement} from '@babel/types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors, typography} from '../../config/styles';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Ionicons';

const Speaker = ({speaker, navigation}) => {
  return (
    <SafeAreaView style={styles.speakerContainer}>
      <View style={styles.outsideMain}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.staticTitle}>About the Speaker</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Image
          source={{uri: speaker.state.params[0].image}}
          style={styles.speakerBioImage}
        />

        <Text style={styles.title}>{speaker.state.params[0].name}</Text>
        <Text style={styles.bio}>{speaker.state.params[0].bio}</Text>

        <View style={styles.button}>
          <LinearGradient
            colors={[colors.purple, colors.blue]}
            start={{x: 0.0, y: 0.2}}
            end={{x: 0.5, y: 1.9}}
            style={styles.buttonStyle}>
            <TouchableOpacity
              onPress={() => Linking.openURL(speaker.state.params[0].url)}>
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
