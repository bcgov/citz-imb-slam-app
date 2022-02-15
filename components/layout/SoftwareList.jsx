import React from 'react'
import { TableGrid } from '../common/TableGrid';
import TableApp from "../common/TableApp";


export const SoftwareList = () => {
  return (
		<div className="app-body">
			<div>
        <div>Software List Title</div>
        <div>add button</div>
      </div>
      <TableGrid listName={'software'} title={'Software List'} />
      <TableApp />

		</div>
	);
}
