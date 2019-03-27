import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
    title: string,
    left?: any,
    right?: any
}

export default ({ title, left, right }: Props) => (
    <View style={styles.container}>
        <View>
            {left && left()}
        </View>
        <Text style={styles.header}>{title}</Text>
        <View>
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
    }
});
