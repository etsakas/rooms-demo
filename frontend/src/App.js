import {Fragment, useCallback, useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";

function App() {

  const [roomList, setRoomList] = useState([]);

  const fetchRoomList = useCallback(async () => {
    try {
      const response = await fetch('/rooms');
      if (!response.ok) {
        throw new Error('Something went wrong inside App!');
      }
      
      const data = await response.json();
      setRoomList(data);

    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchRoomList();
  }, [fetchRoomList]);

  return (
    <Fragment>
      <Form fetchRoomList={fetchRoomList}/>
      <Table roomList={roomList}/>
    </Fragment>
  );
}

export default App;
