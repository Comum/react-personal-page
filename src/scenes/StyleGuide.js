import React from 'react';
import styled from 'styled-components';

import breakpoints from '../theme/breakpoints';
import StyleContent from './styleguide/StyleContent';
import SideMenu from './styleguide/SideMenu';

const StyleGuideMainWrapper = styled.section`
	width: 100%;
	height: 100%;

	position: relative;
`;

const StyleGuideContentWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	@media (max-width: ${breakpoints.small}) {
		height: calc(100% - 40px);
	}
`;

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

const MenuToggle = styled.img`
	width: 20px;
	height: 20px;

	margin-right: 10px;

	cursor: hover;
`;

const SideMenuDesktopWrapper = styled.div`
	width: 250px;
	height: 100%;

	@media (max-width: ${breakpoints.small}) {
		display: none;
	}
`;

const SideMenuMobileWrapper = styled.div`
	width: 100vw;
	height: 100vh;

	position: absolute;
	top: 40px;
`;

class StyleGuide extends React.Component {
	constructor() {
		super();

		this.state = {
			showMenu: false,
		};
	}

	toggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu,
		});
	};

	render() {
		const iconPath = '../assets/icons/menu_toggle.png';

		return (
			<StyleGuideMainWrapper>
				<MobileHeader>
					<MenuToggle src={iconPath} onClick={this.toggleMenu} />
				</MobileHeader>
				<StyleGuideContentWrapper>
					<SideMenuDesktopWrapper>
						<SideMenu />
					</SideMenuDesktopWrapper>
					<StyleContent />
				</StyleGuideContentWrapper>
				{this.state.showMenu && (
					<SideMenuMobileWrapper>
						<SideMenu />
					</SideMenuMobileWrapper>
				)}
			</StyleGuideMainWrapper>
		);
	}
}

export default StyleGuide;
