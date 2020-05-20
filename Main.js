import React, { Component } from 'react'
import { 
    FlatList, 
    Text,
    View,
    Image,
    TouchableOpacity 
} from 'react-native'


export default class Main extends Component {
    
  constructor() {
    super()
    this.state = {
      songs:[],
      num:3
    }
  }

  componentDidMount() {
    this.getSongs()
  }

  add=()=>{
    this.setState({
        num:this.state.num+3
    })
  }
  getSongs(){
    fetch("http://www.cjlly.com:3048/record")
    .then(Response => Response.json())
    .then(songs => this.setState({ 
        songs 
    }))
  }
  toSong= (song)=>{
    const{navigate} = this.props.navigation
    navigate('单曲',{song:song})
  }
  

  renderSong = (song) =>(
    <TouchableOpacity onPress={()=>this.toSong(song)}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:25,lineHeight:200}}>{song.id}</Text>
        <View style={{display:"flex",justifyContent:"center"}}>
            <Text style={{fontSize:20}}>{song.name}</Text>
            <View >
            {song.singer.map((singer)=>
                <Text style={{fontSize:15}}>{singer}</Text>
            )}
            </View>
        </View>
        <View >
            <Image source={{ uri: song.img }}  style={{width:200,height:200}}/>
        </View>
        </View>
    </TouchableOpacity>)

    
  render() {
    return (
        <FlatList
          data={this.state.songs.slice(0,this.state.num)}
          onEndReached={()=>this.add()}
          renderItem={({item})=>this.renderSong(item)}
        />)
  }
}
