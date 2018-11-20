import Axios from 'axios';
import {game, add, get, upd} from './const.jsx';

export const addGame = (event) => {
    event.preventDefault();
    Axios.post(game+add, {
        map : this.getMap(),
        P: this.getMap(),
        C: this.getCExp(),
        V: this.getVExp(),
        generations: this.getGens(),
        scores : this.getScores(),
        colonies : this.getColonies()
    }).then(function(response) {
        document.getElementById('Confirm Game').innerHTML = response.message
        console.log(response)});
}

export const getGame = (gameNumber) => {
    Axios.get(game+get+gameNumber).then(response => {
        return(response.data);
    }).catch(function (error) {
        console.log(error)})
}


export const updateGame = (gameNumber) => {
    Axios.put(game+upd+gameNumber, {
        map : this.getMap(),
        P: this.getMap(),
        C: this.getCExp(),
        V: this.getVExp(),
        generations: this.getGens(),
        colonies : this.getColonies()
    }).then(response => {
        document.getElementById('Confirm Game').innerHTML = response.data.message;
    }).catch(function (error) {
        console.log(error)
    })
}