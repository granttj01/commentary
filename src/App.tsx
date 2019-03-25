/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import { StyleSheet,  View, Alert } from 'react-native';

enum KeyMoment {
  Second = "Second Half",
  Save = "Save",
  Goal = "Goal",
  Yellow = "Yellow Card",
  Sub = "Substitution",
  Full = "Full Time"
}

interface Moment {
  id: number,
  minute: number,
  comment: string,
  keyMoment?: KeyMoment
}

interface Props {}

interface State {
  moments: Moment[]
}

export default class App extends Component<Props, State> {
  state = {
    moments: []
  };

  componentDidMount(): void {
    fetch('http://localhost:3000/moments?_sort=id&_order=desc')
        .then(res => res.json())
        .then(moments => {
          this.setState({ moments })
        }).catch(() => Alert.alert('Fetching commentary failed!'))
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
