import React from 'react';
import { Component } from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native'
import { Moment } from "./App";
import Header from './components/Header'

interface Props {
    moments: Moment[]
}

interface ItemProps {
    item: Moment
}

export default class LiveCommentary extends Component<Props> {
    state = {
        selected: null
    };

    private timeline = React.createRef<any>();

    scrollToEvent = (item: Moment) => {
        this.setState({selected: item.id});
        this.timeline.current.scrollToItem({item, viewPosition: 0.5})
    };

    render() {
        return (
            <View style={styles.container}>
                <Header title='Live commentary' />
                <FlatList
                    ref={this.timeline}
                    style={styles.commentaryList}
                    data={this.props.moments}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    initialNumToRender={10}
                    getItemLayout={(data, index) => (
                        {length: 150, offset: 150 * index, index}
                    )}
                />
            </View>
        )
    }

    renderItem = ({item}: ItemProps) => {
        return (
          <View style={styles.itemContainer}>
              <View style={styles.minuteContainer}><Text>{item.minute}'</Text></View>
              <View style={[styles.momentContainer, this.state.selected === item.id ? { backgroundColor: '#ccff00' } : {}]}><Text style={styles.comment}>{item.comment}</Text></View>
          </View>

        )

    };

    keyExtractor = (item: Moment) => item.id.toString()
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    commentaryList: {
        paddingHorizontal: 20,
        marginTop: 10,
        alignSelf: 'stretch'
    },
    itemContainer: {
        flex: 1,
        height: 150,
        alignItems: 'center',
        flexDirection: 'row'
    },
    momentContainer: {
        flexShrink: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: "#BBDAFF",
        borderRadius: 10
    },
    comment: {
        fontSize: 14
    },
    minuteContainer: {
        height: 30,
        width: 30,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    }
});
