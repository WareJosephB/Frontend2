import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {getAllPlayers, deletePlayer} from './playerFunctions.jsx'

export default class topTable extends Component {
    constructor(props){
        super(props);
        this.state={
            players : getAllPlayers(),
            options :{
            defaultSortName: 'ELO',
            defaultSortOrder : 'desc'
            }
        }
    }

    cellButton(cell, row) {
        return (
           <button className = 'DeleteButton' type='button' onClick={() => {deletePlayer(row.id); this.setState.players = getAllPlayers()}}>
           Delete Player
           </button>
        )
     }

    render() {
      return (  
            <div id='output'>
                <BootstrapTable data={this.state.players} options={this.state.options} className='topTable'>
                    <TableHeaderColumn dataField='id' isKey>Player ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='ELO' dataSort={true}>ELO</TableHeaderColumn>
                    <TableHeaderColumn dataField='numberPlayed' dataSort={true}>Games Played</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={this.cellButton}/>
                </BootstrapTable>
            </div>
        );
    }
}