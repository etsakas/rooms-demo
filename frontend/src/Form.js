import { Fragment, useState } from "react";

const Form = props => {

    const [roomName, setRoomName] = useState('');
    const [roomPassword, setRoomPassword] = useState('');

    const handleNameChange = (event) => {
        setRoomName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setRoomPassword(event.target.value);
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    roomName: roomName ,
                    roomPassword: roomPassword,
                })
            });

            setRoomName('');
            setRoomPassword('');

            if (!response.ok) {
                throw new Error('Something went wrong inside the form!');
            }

            await props.fetchRoomList();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <h3 className="title">Add a new room</h3>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="roomName">Room Name</label>
                <input
                    className="input"
                    type="text"
                    name="roomName"
                    id="roomName"
                    value={roomName}
                    placeholder="Enter room's name"
                    onChange={handleNameChange} />

                <label htmlFor="roomName">Room Password</label>
                <input
                    className="input"
                    type="password"
                    name="roomPassword"
                    id="roomPassword"
                    value={roomPassword}
                    placeholder="Enter room's password"
                    onChange={handlePasswordChange} />

                <button className="button is-primary" type="submit">Submit</button>
            </form>
        </Fragment>
    );
}

export default Form;