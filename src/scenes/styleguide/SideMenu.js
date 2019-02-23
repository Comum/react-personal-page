import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../theme/breakpoints';

const SideMenuContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: tomato;
`;

const SideMenu = () => <SideMenuContainer>SideMenu</SideMenuContainer>;

export default SideMenu;
