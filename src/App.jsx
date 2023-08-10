import React from 'react';
import './App.css';

export default () => (
	<div className='app'>
		<h1>Contact Me</h1>
		<form
			id='contact-form'
			className='contact-form'>
			<input
				placeholder='name*'
				type='text'
				name='name'
				required='true'
			/>
			<input
				placeholder='email address*'
				type='email'
				name='email'
				required='true'
			/>

			<textarea
				maxLength={300}
				placeholder='message (max 300 characters)*'
				name='message'
				required='true'
			/>

			<button type='submit'>Submit</button>
		</form>
	</div>
);
