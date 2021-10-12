import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PASSWORD</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rooms = props.roomList.map((room, index) => {
        return (
            <tr key={room.roomId}>
                <td>{room.roomId}</td>
                <td>{room.roomName}</td>
                <td>{room.roomPassword}</td>
            </tr>
        );
    });

    return <tbody>{rooms}</tbody>;
}

const Table = props => {
        return (
            <table className="table">
                <TableHeader />
                <TableBody roomList={props.roomList}/>
            </table>
        );
}

export default Table;