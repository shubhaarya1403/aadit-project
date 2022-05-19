import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

export default class Meditation extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "white" }]}
            >
        
            <Text style={styles.buttonText}>Meditation Music</Text>
            </TouchableOpacity>
            </View>
        )
    }
}