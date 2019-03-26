import React from 'react';
import { Text } from 'react-native';

interface Props {
    title: string
}

export default ({ title }: Props) => (
    <Text>{title}</Text>
);
