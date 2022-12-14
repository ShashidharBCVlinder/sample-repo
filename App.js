/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  // Button,
  StyleSheet,
  NativeModules,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {ButtonVW} from '@vlinder-mobile/button-widget-rn';
import {ToastVW} from '@vlinder-mobile/toast-message-widget-rn';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const handlePress = () => false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Initialize SDK">
            <ButtonVW
              title="Click Me"
              onPress={() => {
                console.log('Clicked Me');
                NativeModules.VlinderFaceTech.Init(
                  () => {
                    console.log('init success');
                  },
                  () => console.log('init fail'),
                );
              }}
            />
          </Section>
          <Section title="Liveness Check">
            <ButtonVW
              title="Click Me"
              onPress={() =>
                NativeModules.VlinderFaceTech.LivenessCheck(
                  resp => {
                    console.log('livenessCheck ' + resp);
                  },
                  error => console.log('livenessCheck ' + error),
                )
              }
            />
          </Section>
          <Section title="Enrollment">
            <ButtonVW
              title="Click Me"
              onPress={() =>
                NativeModules.VlinderFaceTech.EnrollmentOfUser(
                  resp => {
                    console.log('Enrollment Successful: ' + resp);
                  },
                  error => {
                    console.log('Enrollment Error: ' + error);
                  },
                )
              }
            />
          </Section>
          <Section title="Authentication">
            <ButtonVW
              title="Click Me"
              onPress={() =>
                NativeModules.VlinderFaceTech.AuthenticationOfUser(
                  resp => {
                    console.log('Authentication Successful: ' + resp);
                  },
                  error => {
                    console.log('Authentication Error: ' + error);
                  },
                )
              }
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
