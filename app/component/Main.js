import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     TextInput,
     ScrollView,
     TouchableOpacity,

} from 'react-native';

import Tache from './Tache';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tacheArray: [],
            tacheText: '',
        };
    }
  render() {
    let taches = this.state.tacheArray.map((val, key)=>{
        return <Tache key={key} keyval={key} val={val}
                deleteMethod={()=>this.deleteTache(key)}/>
    });
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>- Liste Des Taches -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
           {taches}
        </ScrollView>

        <View style={styles.footer}>
            <TextInput 
                style={styles.textInput}
                placeholder='>tache'
                onChangeText={(tacheText)=> this.setState({tacheText})}
                value={this.state.tacheText}
                placeholderTextColor='white'
                underlineColorAndroid='transparent'>
            </TextInput>
        </View>
        <TouchableOpacity onPress={ this.addTache.bind(this) } style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </View>
    );
  }
  addTache(){
    if(this.state.tacheText){
        var d = new Date();
        this.state.tacheArray.push({
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1) +
            "/"+ d.getDate(),
            'tache': this.state.tacheText
        });
        this.setState({ tacheArray: this.state.tacheArray });
        this.setState({tacheText:''});
    }
}
deleteTache(key){
    this.state.tacheArray.splice(key, 1);
    this.setState({tacheArray: this.state.tacheArray});
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});
