import { useState } from "react";


export default function UserForm({ onClose, onSubmit }) {
	const [form, setForm] = useState({
		type: "service",
		status: "deactivated",
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		bio: "",
		companyName: "",
		country: "",
		city: "",
		postalCode: "",
		address: "",
		vatNumber: ""
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm(f => ({ ...f, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (onSubmit) onSubmit(form);
		if (onClose) onClose();
	}

		return (
			<form className="user-form" onSubmit={handleSubmit}>
				<h2>Create User</h2>
				<div className="form-row">
					<label>Type</label>
					<select name="type" value={form.type} onChange={handleChange}>
						<option value="service">Service</option>
						<option value="connect">Connect</option>
					</select>
				</div>
				<div className="form-row">
					<label>Status</label>
					<select name="status" value={form.status} onChange={handleChange}>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
						<option value="deactivated">Deactivated</option>
					</select>
				</div>
				<div className="form-row">
					<label>First Name</label>
					<input name="firstName" value={form.firstName} onChange={handleChange} required />
				</div>
				<div className="form-row">
					<label>Last Name</label>
					<input name="lastName" value={form.lastName} onChange={handleChange} required />
				</div>
				<div className="form-row">
					<label>Email</label>
					<input name="email" type="email" value={form.email} onChange={handleChange} required />
				</div>
				<div className="form-row">
					<label>Phone</label>
					<input name="phone" value={form.phone} onChange={handleChange} />
				</div>
				<div className="form-row">
					<label>Bio</label>
					<textarea name="bio" value={form.bio} onChange={handleChange} rows={3} />
				</div>
				<div className="form-row">
					<label>Company</label>
					<input name="companyName" value={form.companyName} onChange={handleChange} />
				</div>
				<div className="form-row">
					<label>Country</label>
					<input name="country" value={form.country} onChange={handleChange} />
				</div>
				<div className="form-row">
					<label>City</label>
					<input name="city" value={form.city} onChange={handleChange} />
				</div>
				<div className="form-row">
					<label>Postal Code</label>
					<input name="postalCode" value={form.postalCode} onChange={handleChange} />
				</div>
				<div className="form-row">
					<label>Address</label>
					<input name="address" value={form.address} onChange={handleChange} />
				</div>
				<div className="form-row">
					<label>VAT Number</label>
					<input name="vatNumber" value={form.vatNumber} onChange={handleChange} />
				</div>
				<div className="form-actions">
					<button type="submit">Save</button>
					<button type="button" onClick={onClose}>Cancel</button>
				</div>
			</form>
		);
}
