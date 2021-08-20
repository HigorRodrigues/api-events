import Activity from './activity.model';

export interface Event{

	id: number;
	name: string;
	description: string;
	imageUrl: string;
	startDate: Date;
	endDate: Date;
	activities: Array<Activity>;
}