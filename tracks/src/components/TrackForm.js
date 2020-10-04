import React, { Fragment, useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

	console.log(locations.length);

	return (
		<Fragment>
			<Spacer>
				<Input
					placeholder='Enter name'
					value={name}
					onChangeText={changeName}
				/>
				{recording ? (
					<Button title='Stop' onPress={stopRecording} />
				) : (
					<Button title='Start Recording' onPress={startRecording} />
				)}
			</Spacer>
		</Fragment>
	);
};

export default TrackForm;
