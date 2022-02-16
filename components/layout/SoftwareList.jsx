import React from 'react'
import { TableGrid } from '../common/TableGrid';
import moockdata from "../../software.mockdata.json"



export const SoftwareList = () => {
  
  const getData = async () => {
    return moockdata
  }

  return (
		<div className="app-body">
      <TableGrid 
        listName={'software'} 
        title={'Software List'}
        getData={getData}
       />
		</div>
	);
}
