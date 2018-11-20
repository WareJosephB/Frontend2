import React, {Component} from 'react';
import {getGame, addGame, updateGame} from './gameFunctions.jsx'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {gameNum : 0, game : '', buttonWorks : false};
    }
    
    handleClick = () => {
        var data = getGame(document.getElementById('Game ID').value);
        this.setState({gameNum : data.gameid, game : data, buttonWorks : true});
    }

    generateField = () => {
        document.getElementById('initAddGame').innerHTML += <GameForm />

    }
    

    render(){
        return(
            <div>
                <form onSubmit ={updateGame} id='updatePlayerForm'>
                    <input id = 'Game ID' type = 'number' placeholder = 'Game ID Number'/>
                    <input type = 'button' value = 'Find Game by ID' onClick={this.handleClick}/>
                    <GameForm />
                </form>
                <form id = 'addGameForm' onSubmit={addGame}>
                    <input type = 'button' className = 'leftButton' id = 'initAddGame' onClick={this.generateFields}>Add Game</input>;
                </form>
                <div id = 'Confirm Game'></div>
            </div>
        )
    }
}