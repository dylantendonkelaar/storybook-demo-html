import type { Meta, StoryObj } from '@storybook/html';
import type { TeamGridProps } from './teamGrid';
import { createTeamGrid } from './teamGrid';

const meta = {
	title: 'Example/TeamGrid',
	tags: ['autodocs', 'CraftCMS', 'Shopify', 'WordPress', 'Magento2'],
	render: (args) => createTeamGrid(args),
	parameters: {
		layout: 'fullscreen',
		docs: {
			source: {
				type: 'auto',
			},
		},
	},
	argTypes: {
		costInHours: { control: 'number' },
		title: { control: 'text' },
		teamMembers: { control: 'object' },
		isCompact: { control: 'boolean' },
		darkMode: { control: 'boolean' },
	},
} satisfies Meta<TeamGridProps>;

export default meta;
type Story = StoryObj<TeamGridProps>;

export const Default: Story = {
	args: {
		title: 'Ons team',
		darkMode: true,
		teamMembers: [
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
		{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
		{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
			{
				employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Placeholder-profile-03.jpg',
				title: 'Naam medewerker',
				employeeFunction: 'Rol',
				showInOverview: true,
			},
		],
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/5aPCaC6B8bSCmvpf0wal7X/Untitled?node-id=0-1&t=16fQWYHsdoPSU19b-1',
		},
	},
};

export const Stimmt: Story = {
	args: {
	  ...Default.args,
	  title: 'Ons team - Stimmt',
	  isCompact: false,
	  teamMembers: [
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Demi-profile.jpg',
			title: 'Demi',
			employeeFunction: 'Project Manager',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Tom-profile.jpg',
			title: 'Tom',
			employeeFunction: 'Developer',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Bram-profile.jpg',
			title: 'Bram',
			employeeFunction: 'Designer',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Thorsten-profile.jpg',
			title: 'Naam medewerker',
			employeeFunction: 'Rol',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Sander-profile-03.jpg',
			title: 'Sander',
			employeeFunction: 'Developer',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Max-profile-03.jpg',
			title: 'Max',
			employeeFunction: 'Developer',
			showInOverview: true,
		},
	{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Eline-profile.jpg',
			title: 'Eline',
			employeeFunction: 'Project Manager',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Jaro-profile.jpg',
			title: 'Jaro',
			employeeFunction: 'Developer',
			showInOverview: true,
		},
		{
			employeeImage: 'https://drlrinu1crs5k.cloudfront.net/_1024xAUTO_crop_center-center_none/Dylan-profile-02.jpg',
			title: 'Dylan',
			employeeFunction: 'Developer',
			showInOverview: true,
		},
	],
	},
  };

export const Compact: Story = {
	args: {
	  ...Default.args,
	  title: 'Ons team - Compact',
	  isCompact: true,
	},
  };