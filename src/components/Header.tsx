import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
    title: string,
    left?: any,
    right?: any
}

export default ({ title, left, right }: Props) => (
    <View style={styles.container}>
        <View style={styles.leftSection}>
            {left && left()}
        </View>
        <Text style={styles.header}>{title}</Text>
        <View style={styles.rightSection}>
            {right && right()}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 50
    },
    header: {
        fontSize: 20
    },
    rightSection: {
        flex: 1,
        alignItems: 'flex-end'
    },
    leftSection: {
        flex: 1,
        alignItems: 'flex-start'
    }
});
