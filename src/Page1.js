// src/Page1.js

import React from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

const Page1 = ({ navigation }) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar translucent={false} />
        <Text>Home ;D</Text>
        <Button
            title="Ir para About"
            onPress={() => navigation.navigate('About')} 
        />
    </View>
);

Page1.navigationOptions = {
    'title': 'Home',
}

export default Page1;