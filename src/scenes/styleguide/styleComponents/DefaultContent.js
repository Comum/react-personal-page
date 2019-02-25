import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.section`
	width: 100%;
	height: 100%;

	padding: 0 20px 10px;
`;

const Paragraph = styled.div`
	width: 100%;

	margin-bottom: 10px;
`;

const DefaultContent = () => {
	return (
		<MainContainer>
			<Paragraph>Welcome to my website's style guide.</Paragraph>
			<Paragraph>In this route you can see the style of this website and the components used in it.</Paragraph>
		</MainContainer>
	);
};

export default DefaultContent;
