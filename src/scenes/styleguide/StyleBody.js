import React from 'react';
import styled from 'styled-components';

import DefaultContent from './styleContent/DefaultContent';
import TypographyContent from './styleContent/TypographyContent';
import ColourContent from './styleContent/ColourContent';

const BodyContainer = styled.section`
	width: calc(100% - 40px);
	height: calc(100% - 60px);

	padding: 0 20px 10px;

	overflow: auto;
`;

const handleContent = content => {
	switch (content) {
		case 'TypographyContent':
			return TypographyContent;
		case 'ColourContent':
			return ColourContent;
		default:
			return DefaultContent;
	}
};

const StyleBody = ({ content }) => {
	const StyleContent = handleContent(content);

	return (
		<BodyContainer>
			<StyleContent />
		</BodyContainer>
	);
};

export default StyleBody;
