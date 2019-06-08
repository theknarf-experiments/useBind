# useBind

A custom React hook for using bind.
Look at `src/App.js` for the example.

# usage

```
export default () => {
	const bind = useBind();

	return <>
		<input {...bind} />
		{ '' + bind }
	</>;
}
