/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import { StyleSheet,  View, Alert, SafeAreaView } from 'react-native';
import LiveCommentary from "./LiveCommentary";
import KeyMoments from "./KeyMoments";

enum KeyMoment {
  Second = "Second Half",
  Save = "Save",
  Goal = "Goal",
  Yellow = "Yellow Card",
  Sub = "Substitution",
  Full = "Full Time"
}

export interface Moment {
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
  private liveCommentaryRef = React.createRef<any>();

  state = {
    moments: [],
    selectedMoment: null
  };

  componentDidMount(): void {
    fetch('http://localhost:3000/moments?_sort=id&_order=desc')
        .then(res => res.json())
        .then(moments => {
          this.setState({ moments })
        }).catch(() => Alert.alert('Fetching commentary failed!'))
  }

  handleSelectKeyMoment = (moment: Moment) => {
    this.liveCommentaryRef.current.scrollToEvent(moment)
  };

  render() {
    const { moments } = this.state;
    let keyMoments: Moment[] = [];
    if (moments.length > 0) {
      keyMoments = moments.filter((moment: Moment) => moment.hasOwnProperty('keyMoment'))
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <LiveCommentary
              moments={moments}
              ref={this.liveCommentaryRef}
          />
          <KeyMoments moments={keyMoments} handleSelectKeyMoment={this.handleSelectKeyMoment} />
        </View>
      </SafeAreaView>
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
