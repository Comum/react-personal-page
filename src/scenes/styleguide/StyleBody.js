import React from 'react';
import styled from 'styled-components';

import DefaultContent from './styleContent/DefaultContent';
import TypographyContent from './styleContent/TypographyContent';

const BodyContainer = styled.section`
	width: 100%;
	height: calc(100% - 60px);

	padding: 0 20px 10px;

	overflow: auto;
`;

const handleContent = content => {
	switch (content) {
		case 'TypographyContent':
			return TypographyContent;
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
