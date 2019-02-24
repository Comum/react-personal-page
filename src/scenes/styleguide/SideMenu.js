import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../theme/breakpoints';
import colours from '../../theme/colours';

const SideMenuContainer = styled.div`
	width: 100%;
	height: 100%;

	outline: 1px solid black;

	background-color: ${colours.bright};

	@media (max-width: ${breakpoints.small}) {
		outline-radius: 5px;
	}

	@media (min-width: ${breakpoints.small}) {
		border: 0px solid black;
		outline: 2px solid grey;
	}
`;

const StyleList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const StyleOption = styled.li`
	margin-bottom: 10px;
`;

const SideMenu = props => (
	<SideMenuContainer>
		<StyleList>
			<StyleOption onClick={() => props.callback('typo')}>Typography</StyleOption>
			<StyleOption onClick={() => props.callback('colours')}>Colours</StyleOption>
		</StyleList>
	</SideMenuContainer>
);

export default SideMenu;
