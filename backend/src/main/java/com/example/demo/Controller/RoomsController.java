package com.example.demo.Controller;

import java.util.List;
import com.example.demo.Model.Room;
import com.example.demo.Repo.RoomsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class RoomsController {

    @Autowired
    RoomsRepo repo;

    @GetMapping("/rooms")
    @ResponseBody
    public List<Room> getAllRooms() {
        System.out.println("GET OK");
        return repo.findAll();
    }

    @PostMapping("/")
    @ResponseBody
    public Room createRoom(@RequestBody Room room) {
        System.out.println("POST OK");
        return repo.save(room);
    }
}