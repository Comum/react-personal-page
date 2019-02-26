import React from 'react';
import styled from 'styled-components';

import fonts from '../../../theme/fonts';

const MainContainer = styled.ul`
	width: 100%;
	height: 100%;

	list-style-type: none;

	margin: 0;
	padding: 0;
`;

//contacts.map(contact => <ContactElement key={contact.id} contact={contact} />);
const getTypographyItems = () => {
	const items = [];
	let i = 0;
	console.log('fonts', fonts);

	for (let property in fonts.sizes) {
		if (typeof fonts.sizes[property] === 'string') {
			const TypographyItem = styled.li`
				width: 100%;
				margin-bottom: 40px;

				font-size: ${fonts.sizes[property]};
			`;

			items.push(<TypographyItem key={i}>I am the {property}.</TypographyItem>);
			i++;
		} else if (typeof fonts.sizes[property] === 'object') {
			for (let child in fonts.sizes[property]) {
				const typoProperty = fonts.sizes[property];
				const TypographyItem = styled.li`
					width: 100%;
					margin-bottom: 40px;

					font-size: ${typoProperty[child]};
				`;

				items.push(
					<TypographyItem key={i}>
						I am the {property}.{child}.
					</TypographyItem>,
				);
				i++;
			}
		}
	}

	return items;
};

const TypographyContent = () => {
	const items = getTypographyItems();

	return <MainContainer>{items}</MainContainer>;
};

export default TypographyContent;
