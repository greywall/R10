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

const Speaker = ({navigation}) => {
  const speaker = navigation.getParam('speaker');

  console.log(Speaker);
  console.log(Speaker);
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
        {/* <Image source={{uri: Speaker.image}} styles={styles.image} />
        <Text styles={styles.title}>{Speaker.name}</Text>
        <Text styles={styles.bio}>{Speaker.bio}</Text> */}

        <Image
          style={styles.speakerBioImage}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />

        <Text style={styles.title}>Ada Lovelace</Text>
        <Text style={styles.bio}>
          Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 –
          27 November 1852) was an English mathematician and writer, chiefly
          known for her work on Charles Babbage's proposed mechanical
          general-purpose computer, the Analytical Engine. She was the first to
          recognise that the machine had applications beyond pure calculation,
          and published the first algorithm intended to be carried out by such a
          machine.
        </Text>

        <View style={styles.button}>
          <LinearGradient
            colors={[colors.purple, colors.blue]}
            start={{x: 0.0, y: 0.2}}
            end={{x: 0.5, y: 1.9}}
            style={styles.buttonStyle}>
            <TouchableOpacity onPress={() => Linking.openURL(speaker.url)}>
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
