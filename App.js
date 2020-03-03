
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import Menu from './Components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRoom from './Components/AddRoom'
import Room from './Components/Room'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class App extends Component {

  state = {
    roomOnClick: {
    },
    index: 0,
    AddRoomS: [
      { RoomName: 'shimon', RoomKind: 'badroom', RoomColor: 'green',Products:['mazgan']},
      { RoomName: 'daniel', RoomKind: 'malka', RoomColor: 'red' },

    ],
  }

  // addProducts =(i) => {
  //   let ar = this.state.AddRoomS.filter((ele, ind) => (ind != i));

  //   this.setState({AddRoomS: [{
  //       RoomName: RoomName,
  //       RoomKind: RoomKind,
  //       RoomColor: RoomColor,
  //       Products:Products,
  //       Display: 'none',
  //     },...ar]
  //   });
  // }  
  

  delRoom = (i) => {

    let ar = this.state.AddRoomS.filter((ele, ind) => (ind != i));
    this.setState({ AddRoomS: [...ar] });
  }

  onClickRoom = (i,RoomName, RoomKind, RoomColor,Products) => {
    let ar = this.state.AddRoomS.filter((ele, ind) => (ind != i));

    this.setState({AddRoomS: [{
        RoomName: RoomName,
        RoomKind: RoomKind,
        RoomColor: RoomColor,
        Products:Products,
        Display: 'none',
      },...ar]
    });
  }


  // onClickRoom = (RoomName, RoomKind, RoomColor) => {

  //   this.setState({
  //     RoomName: {
  //       RoomName: RoomName,
  //       RoomKind: RoomKind,
  //       RoomColor: RoomColor,
  //       Display: 'none',
  //     }, ...this.state.AddRoomS
  //   })

  // }
  newRoom = (RoomName, RoomKind, RoomColor) => {

    this.setState({ AddRoomS: [{ RoomName: RoomName, RoomKind: RoomKind, RoomColor: RoomColor }, ...this.state.AddRoomS] })
    // this.setState({AddRoomS:[RoomName={ RoomName: RoomName, RoomKind: RoomKind, RoomColor:RoomColor }]})

  }



  render() {

    return (
      <div >
        
        <Router>
        <Menu/>
        <h1 className='App'>Smart House</h1>
          <br />
          <br />        
          <Switch>

            <Route exact path='/HomePage' component={() => {
              return  <div>/>
                 <p className='App'><Link className='App' to='/AddRoom'>Add Room <button>+</button> </Link></p>
               {this.state.AddRoomS.map((element, i) => {
               return <HomePage RoomName={element.RoomName} AddRoomS={this.state.AddRoomS} RoomKind={element.RoomKind} RoomColor={element.RoomColor}
              del={this.delRoom} index={i} create={this.newRoom} onClickRoom={this.onClickRoom} Products={element.Products}>
            </HomePage> 
          })}
           </div>
            }}></Route>


            <Route exact path='/AddRoom' component={() => {
              return <div>
                <AddRoom AddRoomS={this.state.AddRoomS} RoomKind={this.state.AddRoomS.RoomKind} RoomName={this.state.AddRoomS.RoomName}
                  RoomColor={this.state.AddRoomS.RoomColor} create={this.newRoom}
                />
              </div>
            }}></Route>


            <Route exact path='/Room' component={() => { return <Room AddRoomS={this.state.AddRoomS} roomOnClick={this.state.roomOnClick} /> }}></Route>

          </Switch>
        </Router>
      </div>
    )
  }
}
