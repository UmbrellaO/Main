/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'StudentShield',
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={ require('./assets/bg.jpg') } />
        <View style={{flex: 0.5,flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity style={{flex:4,alignItems:'flex-end'}}
            onPress={ () => navigate('DangerousZone')}>
            <Image style={{height:47, width:27}} source={ require('./assets/DangerMap-1.png') } />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1.2,alignItems:'center'}}
            onPress={ () => navigate('Settings')}>
            <Image style={{height:38, width:39}} source={ require('./assets/settings.png') } />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={ [styles.title, { fontSize: 40}] }>StudentShield</Text>
        </View>
        <View style={{flex:0.5,flexDirection:'row'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={ require('./assets/Cloud-1.png') } />
            </View>
            
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-start'}}>
            <Text style={{fontWeight: 'bold',color: '#fff',backgroundColor: 'rgba(0,0,0,0)'}}>26˚C</Text>
            </View>
            
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'flex-end'}}>
            <Text style={{fontWeight: 'bold',color: '#fff',backgroundColor: 'rgba(0,0,0,0)'}}>空污旗號</Text>
            <Image source={ require('./assets/AirPollution.Nice.png')}/>
            </View>
        </View>
        <View style={styles.bottmContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'rgba(64,64,64,0.2)'}]}
            onPress={ () => navigate('Deterrence')}>
            <Text>
              <Image source={ require('./assets/bell.png') } /></Text>
            <Text/>
            <Text style={styles.buttonText}>嚇阻</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'rgba(64,64,64,0.2)'}]}
            onPress={() => navigate('Mayday') }>
            <Text>
              <Image source={ require('./assets/sos.png') } /></Text>
            <Text/>
            <Text style={styles.buttonText}>求救</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottmContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'rgba(64,64,64,0.2)'}]}
          onPress={ () => navigate('Inform')}>
            <Text>
              <Image source={ require('./assets/schoolSaf.png') } /></Text>
            <Text/>
            <Text style={styles.buttonText}>通報</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'rgba(64,64,64,0.2)'}]}
            onPress={ () => navigate('Record')}>
            <Text/>
            <Text>
              <Image source={ require('./assets/rember.png') } /></Text>
            <Text/>
            <Text/>
            <Text style={styles.buttonText}>蒐證</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Deterrence extends Component {
  static navigationOptions = {
    title: 'Deterrence'
  }
  render(){
    return(
      <View>
        <Text>Hey, deterrence</Text>
      </View>
    );
  }
}

class Inform extends Component {
  static navigationOptions = {
    title: 'Inform'
  }
  render(){
    return(
      <View>
        <Text>Hey, Inform</Text>
      </View>
    );
  }
}

class Mayday extends Component {
  static navigationOptions = {
    title: 'Mayday'
  }
  render(){
    return(
      <View>
        <Text>Hey, Mayday</Text>
      </View>
    );
  }
}

class Record extends Component {
  static navigationOptions = {
    title: 'Record'
  }
  render(){
    return(
      <View>
        <Text>Hey, Record</Text>
      </View>
    );
  }
}

class DangerousZone extends Component {
  static navigationOptions = {
    title: 'DangerousZone'
  }
  render(){
    return(
      <View>
        <Text>Hey, DangerousZone</Text>
      </View>
    );
  }
}

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings'
  }
  render(){
    return(
      <View>
        <Text>Hey, Settings</Text>
      </View>
    );
  }
}

const MainScreen = StackNavigator({
  Main: { screen: Main },
  Deterrence: { screen: Deterrence },
  Inform: { screen: Inform },
  Mayday: { screen: Mayday },
  Record: { screen: Record },
  DangerousZone: { screen: DangerousZone },
  Settings: { screen: Settings },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottmContainer: {
    flex:1,
    height: 200,
    flexDirection: 'row',
  },
  background: {
    height: 800,
    width: 600,
    position: 'absolute',
  },
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  desc: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  }
});
AppRegistry.registerComponent('Main', () => MainScreen);
