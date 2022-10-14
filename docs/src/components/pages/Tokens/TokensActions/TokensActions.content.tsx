import {Icon20ComputerOutline, Icon20SmartphoneOutline} from '@vkontakte/icons';
import React from 'react';

export const tags = [
	{
		id: 'background',
		name: 'Background',
	},
	{
		id: 'animation',
		name: 'Animation',
	},
	{
		id: 'component',
		name: 'Component',
	},
	{
		id: 'color',
		name: 'Color',
	},
	{
		id: 'alpha',
		name: 'Alpha',
	},
];

export const themes = [
	{
		id: 'vk-base-dark',
		name: 'VK Base Dark',
	},
	{
		id: 'vk-base-light',
		name: 'VK Base Light',
	},
	{
		id: 'paradigm-dark',
		name: 'Paradigm Dark',
	},
	{
		id: 'paradigm-light',
		name: 'Paradigm Light',
	},
	{
		id: 'octavius-dark',
		name: 'Octavius Dark',
	},
];

export const valueTypes = [
	{
		label: <Icon20SmartphoneOutline aria-hidden="true" />,
		value: 'compact',
		'aria-label': 'Compact',
	},
	{
		label: <Icon20ComputerOutline aria-hidden="true" />,
		value: 'regular',
		'aria-label': 'Regular',
	},
];
