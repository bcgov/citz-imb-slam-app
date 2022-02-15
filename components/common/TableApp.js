import React from 'react';
import Table from './Table';
import dummy from '../../dummy.json'

export default class TableApp extends React.Component {
    constructor(props){
      super(props);
      this.state={
        tableData:dummy 
      }
    }
    
    
    render() {
        
        
        return (
          <div className="TableApp">
            <Table data={this.state.tableData}/>
          </div>
          
        );
    }
    
   
}