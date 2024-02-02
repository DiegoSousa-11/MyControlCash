import { ITabs } from '@models/ITabs';

export const routes: ITabs = [
	{
		name: 'Home',
		icon: 'material-symbols:home-rounded',
		path: '/Home'
	},
	{
		name: 'Statement',
		icon: 'fluent:clipboard-task-list-ltr-24-filled',
		path: '/Home/Statement'
	},
	{
		name: 'Statistics',
		icon: 'fluent:data-pie-24-filled',
		path: '/Home/Statistics'
	}
];