import React from 'react';
import styled from 'styled-components';

import breakpoints from '../theme/breakpoints';
import StyleContent from './styleguide/StyleContent';

const MobileHeader = styled.div`
	display: none;

	@media (max-width: ${breakpoints.small}) {
		width: 100%;
		height: 40px;

		position: relative;

		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
`;

const SideMenu = styled.div`
	width: 100%;
	height: 40px;

	background-color: tomato;

	@media (min-width: ${breakpoints.small}) {
		width: 250px;
	}
`;

const MenuToggle = styled.img`
	width: 20px;
	height: 20px;

	margin-right: 10px;

	cursor: hover;
`;

const StyleGuide = () => {
	const iconPath = '../assets/icons/menu_toggle.png';

	return (
		<div>
			<MobileHeader>
				<MenuToggle src={iconPath} />
			</MobileHeader>
			<SideMenu />
			<StyleContent />
		</div>
	);
};

export default StyleGuide;
