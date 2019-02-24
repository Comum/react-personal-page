import React from 'react';
import styled from 'styled-components';
import ReactResizeDetector from 'react-resize-detector';
import axios from 'axios';

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
	width: 99%;
	height: calc(100% - 40px);

	position: absolute;
	top: 40px;
	left: 0;
	right: 0;
	margin: auto;
`;

class StyleGuide extends React.Component {
	constructor() {
		super();

		this.dataUrl = `${window.location.origin}/assets/data/styleContent.json`;
		this.state = {
			showMenu: false,
			content: 'default',
			data: [],
		};
	}

	componentDidMount() {
		axios
			.get(this.dataUrl)
			.then(response => {
				this.setState({
					data: response.data.topics,
				});
			})
			.catch(function(error) {
				// still need to find a way to handle this
				console.log(error);
			});
	}

	changeContent = newContent => {
		this.setState({
			showMenu: false,
			content: newContent,
		});
	};

	toggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu,
		});
	};

	handleResize = () => {
		this.setState({
			showMenu: false,
		});
	};

	render() {
		const iconPath = '../assets/icons/menu_toggle.png';

		return (
			<ReactResizeDetector handleWidth handleHeight onResize={this.handleResize}>
				<StyleGuideMainWrapper onResize={this.handleResize}>
					<MobileHeader>
						<MenuToggle src={iconPath} onClick={this.toggleMenu} />
					</MobileHeader>
					<StyleGuideContentWrapper>
						<SideMenuDesktopWrapper>
							<SideMenu callback={this.changeContent} topics={this.state.data} />
						</SideMenuDesktopWrapper>
						<StyleContent content={this.state.content} />
					</StyleGuideContentWrapper>
					{this.state.showMenu && (
						<SideMenuMobileWrapper>
							<SideMenu callback={this.changeContent} topics={this.state.data} />
						</SideMenuMobileWrapper>
					)}
				</StyleGuideMainWrapper>
			</ReactResizeDetector>
		);
	}
}

export default StyleGuide;
