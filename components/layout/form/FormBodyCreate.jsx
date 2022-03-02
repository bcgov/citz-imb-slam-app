import React, { useState } from 'react'
import Button from "../../common/Button"
import Select from 'react-select';
import TextareaAutosize from 'react-textarea-autosize';
import { TextInput } from '../../common/TextInput';
import { PeopleSearch } from '../../common/PeopleSearch';

export const FormBodyCreate = props => {
	const initialFormState = { id: null, name: '', renewaldate: '' }
	const [ software, setSoftware ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setSoftware({ ...software, [name]: value })
	}

	//dropdown
	const options = [
		{ value: 'Monthly', label: 'Monthly' },
		{ value: 'Yearly', label: 'Yearly' },
	  ]
	  
	const Dropdown = () => (
		<Select options={options} />
	)

	return (
		<>
		<form
			className="software"
			onSubmit={event => {
				event.preventDefault()
			}}
		>
			<div className="full-container">
			<div className="flex-row">
				<div className="flex-large">
					<h1 className="form-title">Add Software</h1>
				</div>
			</div>
			<div className="flex-row">
				<TextInput label={'Title'} />
				<PeopleSearch label={'License Administrator'}/>
				{/* <div className="flex-large">
					<label>Renewal Date</label>
					<input type="date" name="renewaldate" placeholder="YYYY/MM/DD" value={software.renewaldate} onChange={handleInputChange} />
				</div> */}
			</div>
			<div className="flex-row">
				<TextInput label={'Publisher'} />
			</div>
			{/* <div className="flex-row">
				<div className="flex-large">
					<label>Cost</label>
					<input type="text" name="cost" value={software.cost} onChange={handleInputChange} />
				</div>
				<div className="flex-large">
					<label>Billing Cycle</label>
					<Dropdown />
				</div>
			</div> */}
			{/* <div className="flex-row">
				<div className="flex-large">
					<label>Quantity</label>
					<input type="text" name="quantity" value={software.quantity} onChange={handleInputChange} />
				</div>
			</div>
			<div className="flex-row">
				<div className="flex-large">
					<label>Note</label>
					<TextareaAutosize 
						className="textarea"
						minRows={3}
					/>
				</div>
			</div> */}
			<div className="flex-row">
				<div className="flex-large button-group">
					<Button
						theme="muted"
						>Cancel
					</Button>
					<Button
						theme="default"
						>Save
					</Button>
				</div>
			</div>
			</div>
		</form>
		</>
	)
}
