import React from 'react';
import { Component } from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity, Dimensions} from 'react-native'
import { Moment } from "./App";
import Header from './components/Header'
import Collapsible from "react-native-collapsible";

interface Props {
    moments: Moment[],
    handleSelectKeyMoment: any
}

interface ItemProps {
    item: Moment
}

export default class KeyMoments extends Component<Props> {
    state = {
        isCollapsed: true
    };

    toggleCollapse = () => this.setState({isCollapsed: !this.state.isCollapsed});

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleCollapse}>
                    <Header title='Key moments' />
                </TouchableOpacity>
                <Collapsible collapsed={this.state.isCollapsed}>
                        <FlatList
                            style={styles.commentaryList}
                            data={this.props.moments}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                            initialNumToRender={10}
                        />
                </Collapsible>
            </View>
        )
    }

    renderItem = ({item}: ItemProps) => {
        return (
            <TouchableOpacity onPress={() => this.props.handleSelectKeyMoment(item)}>
                <View style={styles.keyMomentContainer}>
                    <View style={styles.timeContainer}>
                        <Text>{item.minute}'</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>{item.keyMoment}</Text>
                    </View>
                </View>
            </TouchableOpacity>

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
        maxHeight: 150,
        width: Dimensions.get('window').width,
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
