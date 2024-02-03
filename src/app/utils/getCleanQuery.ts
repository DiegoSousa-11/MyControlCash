export function getCleanQuery(query: string): string {
	const querySplitted = query.split('&');
	
	const cleanQuerySplitted = querySplitted.filter(item => {
		const itemSplitted = item.split('=');
		const value = itemSplitted[1];
		
		
		if(value !== 'undefined') {
			return true;
		}

		return false;
	});

	return cleanQuerySplitted.join('&');
}