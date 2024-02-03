export function convertTimeDateToDate(date: Date): string {
	const splitedDate = date.toISOString().split('T');
	const formattedDate = splitedDate[0];

	return formattedDate;
}