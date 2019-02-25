import React from 'react';
import styled from 'styled-components';

import StyleBody from './StyleBody';
import fonts from '../../theme/fonts';

const StyleContentWrapper = styled.section`
	width: 100%;
	height: 100%;
`;

const StyleHeader = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${fonts.sizes.subtitle1};
`;

const StyleContent = props => (
	<StyleContentWrapper>
		<StyleHeader>{props.header}</StyleHeader>
		<StyleBody content={props.content} />
	</StyleContentWrapper>
);

export default StyleContent;
