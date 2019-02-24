import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../theme/breakpoints';

const SideMenuContainer = styled.div`
	width: 100%;
	height: 100%;

	outline: 1px solid black;

	@media (min-width: ${breakpoints.small}) {
		border: 0px solid black;
		outline: 2px solid grey;
	}
`;

const SideMenu = () => <SideMenuContainer>SideMenu</SideMenuContainer>;

export default SideMenu;
