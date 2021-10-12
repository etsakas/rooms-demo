package com.example.demo.Repo;

import java.util.List;
import com.example.demo.Model.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomsRepo extends CrudRepository<Room, Integer>{
	List<Room> findByRoomName(String roomName);
	Room findByRoomId(int roomId);
	List<Room> findAll();
}