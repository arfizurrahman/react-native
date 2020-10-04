import React, { Fragment, useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

	const [saveTrack] = useSaveTrack();

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
				{!recording && locations.length ? (
					<Spacer>
						<Button title='Save Recording' onPress={saveTrack} />
					</Spacer>
				) : null}
			</Spacer>
		</Fragment>
	);
};

export default TrackForm;
