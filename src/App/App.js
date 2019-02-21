import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import './global-styles';

import EaterEgg from '../scenes/EasterEgg';
import HomeContainer from '../scenes/HomeContainer';
import StyleGuide from '../scenes/StyleGuide';
import WorksPage from '../scenes/WorksPage';

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const App = () => (
	<AppContainer>
		<HashRouter>
			<div>
				<Route path="/works/:id" component={WorksPage} />
				<Route path="/easteregg" component={EaterEgg} />
				<Route path="/styleguide" component={StyleGuide} />
				<Route path="/" exact component={HomeContainer} />
			</div>
		</HashRouter>
	</AppContainer>
);

export default App;
