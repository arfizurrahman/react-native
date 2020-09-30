import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [restaurants, setRestaurants] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		searchApi('pasta');
	}, []);

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose',
				},
			});
			setRestaurants(response.data.businesses);
			setErrorMessage('');
		} catch (err) {
			console.log(err.message);
			setErrorMessage('Something went wrong');
		}
	};

	return [searchApi, restaurants, errorMessage];
};
