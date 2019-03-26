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

export default class LiveCommentary extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/* live commentary title here */}
                <Header title='Live commentary' />
                {/* comment timeline here */}
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
            <View style={styles.momentContainer}><Text>{item.comment}</Text></View>
        )

    };

    keyExtractor = (item: Moment) => item.id.toString()
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    commentaryList: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    momentContainer: {
        marginBottom: 20,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: "#BBDAFF",
        borderRadius: 10
    }
});
