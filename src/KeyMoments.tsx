import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Moment } from "./App";
import Header from './components/Header'

interface Props {
    moments: Moment[]
}

interface ItemProps {
    item: Moment
}

export default class KeyMoments extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Header title='Key moments' />
                <FlatList
                    style={styles.commentaryList}
                    data={this.props.moments}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    initialNumToRender={10}
                />
            </View>
        )
    }

    renderItem = ({item}: ItemProps) => {
        return (
            <View style={styles.keyMomentContainer}>
                <View style={styles.timeContainer}>
                    <Text>{item.minute}'</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text>{item.keyMoment}</Text>
                </View>
            </View>
        )
    };

    keyExtractor = (item: Moment) => item.id.toString()
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
        alignItems: 'center',
        borderTopWidth: 1,
        alignSelf: 'stretch'
    },
    commentaryList: {
        paddingHorizontal: 20,
        marginTop: 10,
        alignSelf: 'stretch'
    },
    keyMomentContainer: {
        flex: 1,
        margin: 10,
        flexDirection: 'row'
    },
    timeContainer: {
        flex: 1
    },
    descriptionContainer: {
        flex: 4
    }
});
