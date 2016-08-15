import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Container from './components/Container.react';
import Search from './components/Search.react';
import hints from './stores/Hints';
import CSS from '../scss/index.scss';

injectTapEventPlugin();

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Search collection={hints} />
				<Container collection={hints} />
			</div>
		)
	}
}