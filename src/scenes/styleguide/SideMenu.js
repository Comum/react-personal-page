import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../theme/breakpoints';
import colours from '../../theme/colours';

const SideMenuContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;

	outline: 1px solid black;

	background-color: ${colours.style.bright};

	@media (min-width: ${breakpoints.small}) {
		border: 0px solid black;
		outline: 2px solid grey;
	}
`;

const StyleList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const StyleOption = styled.li`
	padding: 5px 10px;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

const StyleDropDownOption = styled.details`
	padding: 5px 10px;
`;

const getTopicsList = (topics, callback) => {
	if (!topics) {
		return <div />;
	}

	return topics.map(topic => {
		if (!topic.children.length) {
			return (
				<StyleOption key={topic.id} onClick={() => callback(topic.component, topic.header)}>
					{topic.header}
				</StyleOption>
			);
		}

		const topicChildren = topic.children.map(childTopic => {
			return (
				<StyleOption key={childTopic.id} onClick={() => callback(childTopic.component, childTopic.header)}>
					{childTopic.header}
				</StyleOption>
			);
		});

		return (
			<StyleDropDownOption key={topic.id}>
				<summary>{topic.header}</summary>
				{topicChildren}
			</StyleDropDownOption>
		);
	});
};

const SideMenu = ({ topics, callback }) => {
	const topicsList = getTopicsList(topics, callback);

	return (
		<SideMenuContainer>
			<StyleList>{topicsList}</StyleList>
		</SideMenuContainer>
	);
};

export default SideMenu;
