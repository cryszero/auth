import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput
			placeholder={placeholder}
			autoCorrect={false}
			secureTextEntry={secureTextEntry}
			value={value}
			onChangeText={onChangeText}
			style={styles.inputStyle}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 40,
		flex: 1,


	},
	
	inputStyle: {
		flex: 2,
		lineHeight: 23,
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		alignSelf: 'flex-end'
	},

	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	}
}

export {Input};