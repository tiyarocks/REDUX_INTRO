import React, { Component } from 'react'
import { connect } from 'react-redux'
    //default  //named
class SongList extends Component {
    render() {
        //this.props==={songs:state.song}
        console.log(this.props)
        return (
            <div>
              SongList  
            </div>
        )
    }
}
const mapStateToProps=(state=>{

    return{
        songs:state.songs
    }
})
export default connect(mapStateToProps)(SongList)