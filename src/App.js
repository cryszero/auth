import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Spinner, CardSection } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: 'xyu' };

	componentDidMount() {
		firebase.initializeApp({
		apiKey: 'AIzaSyA0fPUvpmlOedsv5z1bJw-oZuLR6ayy400',
		authDomain: 'auth-eb476.firebaseapp.com',
		databaseURL: 'https://auth-eb476.firebaseio.com',
		projectId: 'auth-eb476',
		storageBucket: 'auth-eb476.appspot.com',
		messagingSenderId: '197731419451'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	logOut() {
		return (
			<LoginForm />	
		);
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true: 
				return (<CardSection>
				<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
				</CardSection>);
			case false: 
				return <LoginForm />;
			default: 
				return <CardSection><Spinner /></CardSection>;
		}
	}
	

	render() {
		return (
			<View>
				<Header>Authentication</Header>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
