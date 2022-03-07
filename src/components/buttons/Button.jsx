/** @format */
/**
 * A react component button
 *
 * @component
 */
export const Button = (props) => {
	const { theme, type = 'button', children, ...remainingProps } = props;
	return (
		<button type={type} className={'btn btn-' + theme} {...remainingProps}>
			{children}
		</button>
	);
};
