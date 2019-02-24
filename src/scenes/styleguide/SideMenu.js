import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../theme/breakpoints';
import colours from '../../theme/colours';

const SideMenuContainer = styled.div`
	width: 100%;
	height: 100%;

	outline: 1px solid black;

	background-color: ${colours.bright};

	@media (max-width: ${breakpoints.small}) {
		outline-radius: 5px;
	}

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
	margin-bottom: 10px;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

const getTopicsList = (topics, callback) => {
	if (!topics) {
		return <div />;
	}

	return topics.map(topic => {
		if (!topic.children.length) {
			return (
				<StyleOption key={topic.id} onClick={() => callback(topic.component)}>
					{topic.header}
				</StyleOption>
			);
		}

		const topicChildren = topic.children.map(childTopic => {
			return (
				<StyleOption key={childTopic.id} onClick={() => callback(childTopic.component)}>
					{childTopic.header}
				</StyleOption>
			);
		});

		return (
			<details key={topic.id}>
				<summary>{topic.header}</summary>
				{topicChildren}
			</details>
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
