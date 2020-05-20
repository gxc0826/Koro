import React, { Component } from 'react'
import {  Text, View, Image} from 'react-native'

export default class Song extends Component {
    render() {
        const {params} = this.props.route
        var song = params.song
        return (
            <View style={{display:"flex",
            justifyContent:"space-around",
            alignItems:"center"}}>  
                    <Text style={{fontSize:40}}>{song.name}</Text>
                    <Text style={{fontSize:25}}>{song.singer}</Text>
                    <Image source={{ uri: song.img }} style={{width:200,height:200}} />
            </View>
        )
    }
}