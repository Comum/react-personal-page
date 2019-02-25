import React from 'react';
import styled from 'styled-components';

import DefaultContent from './styleComponents/DefaultContent';

const BodyContainer = styled.section`
	width: 100%;
	height: calc(100% - 50px);

	overflow: hidden;
`;

const handleContent = content => {
	switch (content) {
		default:
			return DefaultContent;
	}
};

const StyleBody = ({ content }) => {
	const StyleContent = handleContent(content);
	console.log('StyleContent', StyleContent);

	return (
		<BodyContainer>
			<StyleContent />
		</BodyContainer>
	);
};

export default StyleBody;
