import React from 'react';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';
import Card from '../../components/Card';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Button title='navigate' onPress={() => navigation.navigate('WelcomeScreen')}/>
        <Button title='Drawer' onPress={() => navigation.navigate('HomeDrawer')}/>
        <View style={{flexDirection:'row', margin: 16}}>
          <Card style={styles.card} />
          <Card style={styles.card} />
        </View>
        <View style={{flexDirection:'row', margin: 16}}>
          <Card style={styles.card} />
          <Card style={styles.card} />
        </View>
        <View style={{flexDirection:'row', margin: 16}}>
          <Card style={styles.card} />
          <Card style={styles.card} />
        </View>
        <View style={{flexDirection:'row', margin: 16}}>
          <Card style={styles.card} />
          <Card style={styles.card} />
        </View>
        <Card style={styles.card} />
        <Card style={styles.card} />
        <Card style={styles.card} />
        <Card style={styles.card} />
        <Card style={styles.card} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;