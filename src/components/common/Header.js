import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const {viewStyles, textStyles} = styles;
	return (
		<View style={ viewStyles }>
			<Text style= { textStyles }>{props.children}</Text>
		</View>
	);
};

const styles = {
	viewStyles: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		height: 60,
		backgroundColor: '#F8F8F8',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		elevation: 2
	},

	textStyles: {
		fontSize: 20
	}
}

export {Header};