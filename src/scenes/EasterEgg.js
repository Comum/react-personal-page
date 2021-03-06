import React from 'react';
import styled from 'styled-components';

import RocketMan from '../components/RocketMan/RocketMan';
import Body from '../components/typography/Body';
import fonts from '../theme/fonts';

const TitleContainer = styled.div`
    width: 100%;

    padding-top: 50px;

    font-size: ${fonts.sizes.small.mainTitle}
    text-align: center;
`;

const BodyContainer = styled.div`
	margin-top: 20px;

	text-align: center;
`;

const EasterEgg = () => (
	<div>
		<TitleContainer>I am the easter egg page</TitleContainer>
		<BodyContainer>
			<Body colour="tertiary">Nothing to see here though</Body>
			<RocketMan />
		</BodyContainer>
	</div>
);

export default EasterEgg;
