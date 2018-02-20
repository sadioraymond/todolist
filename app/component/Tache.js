import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     TouchableOpacity,

} from 'react-native';

export default class Tache extends React.Component {
  render() {
    return (
        <View key={this.props.keyval} style={styles.tache}>
                <Text style={styles.tacheText}>{this.props.val.date}</Text>
                <Text style={styles.tacheText}>{this.props.val.tache}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.tacheDelete}>
                    <Text style={styles.tacheDeleteText}>D</Text>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    tache: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    tacheText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    tacheDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    tacheDeleteText: {
        color: 'white'
    }
});


