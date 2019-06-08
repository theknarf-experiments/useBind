import React, { useState } from 'react';
import './App.css';

// Custom hook
const useBind = (initialState) => {
	const  [ value, setValue ] = useState(initialState);
	var obj = { value, onChange: e => setValue(e.target.value) };
	Object.defineProperty(obj, 'toString', { value: () => value });
	return obj;
};

export default () => {
	const bind = useBind();
	console.log(bind);

	return <section>
		<h1> useBind test </h1>

		<input {...bind} />

		<span>Value: { bind.value }</span>
		<span>toString: { bind.toString() }</span>
		<span>implicit toString: { '' + bind }</span>
	</section>;
}
