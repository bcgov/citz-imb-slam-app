import React from 'react'
import { TableGrid } from '../common/TableGrid';

export const SoftwareList = () => {
  return (
		<div>
			<div>
        <div>Software List Title</div>
        <div>add button</div>
      </div>
      <TableGrid listName={'software'} title={'Software List'} />
		</div>
	);
}
