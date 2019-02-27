import React from 'react';
import styled from 'styled-components';

import colours from '../../../theme/colours';

const MainContainer = styled.ul`
	width: 100%;
	height: 100%;

	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const ColourRow = styled.li`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const ColourElement = styled.div`
	width: 100px;
	height: 90px;

	border: 1px solid black;

	margin-right: 20px;
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ColourWrapper = styled.div`
	width: 100%;
	height: 60px;
`;

const ColourWrapperBright = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.bright};
`;

const ColourWrapperDark = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.dark};
`;

const ColourWrapperPrimary = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.primary};
`;

const ColourWrapperPrimaryFaded = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.primaryFaded};
`;

const ColourWrapperPrimaryThin = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.primaryThin};
`;

const ColourWrapperSecondary = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.secondary};
`;

const ColourWrapperTertiary = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.tertiary};
`;

const ColourWrapperQuaternary = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${colours.style.quaternary};
`;

const ColourName = styled.div`
	width: 100%;

	text-align: center;
`;

const ColourContent = () => {
	return (
		<MainContainer>
			<ColourRow>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperBright />
					</ColourWrapper>
					<ColourName>{colours.style.bright}</ColourName>
				</ColourElement>
			</ColourRow>
			<ColourRow>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperDark />
					</ColourWrapper>
					<ColourName>{colours.style.dark}</ColourName>
				</ColourElement>
			</ColourRow>
			<ColourRow>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperPrimary />
					</ColourWrapper>
					<ColourName>{colours.style.primary}</ColourName>
				</ColourElement>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperPrimaryFaded />
					</ColourWrapper>
					<ColourName>{colours.style.primaryFaded}</ColourName>
				</ColourElement>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperPrimaryThin />
					</ColourWrapper>
					<ColourName>{colours.style.primaryThin}</ColourName>
				</ColourElement>
			</ColourRow>
			<ColourRow>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperSecondary />
					</ColourWrapper>
					<ColourName>{colours.style.secondary}</ColourName>
				</ColourElement>
			</ColourRow>
			<ColourRow>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperTertiary />
					</ColourWrapper>
					<ColourName>{colours.style.tertiary}</ColourName>
				</ColourElement>
			</ColourRow>
			<ColourRow>
				<ColourElement>
					<ColourWrapper>
						<ColourWrapperQuaternary />
					</ColourWrapper>
					<ColourName>{colours.style.quaternary}</ColourName>
				</ColourElement>
			</ColourRow>
		</MainContainer>
	);
};

export default ColourContent;
