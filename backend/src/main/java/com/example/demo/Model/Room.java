package com.example.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "id")
    private int roomId;

    @Column(name = "name")
    private String roomName;
    @Column(name = "password")
    private String roomPassword;

    protected Room() {}

    public Room(String roomName, String roomPassword) {
        this.roomName = roomName;
        this.roomPassword = roomPassword;
    }

    @Override
    public String toString() {
        StringBuilder roomInfo = new StringBuilder();
        roomInfo.append("Room [Id = ").append(roomId).append(", Name = ")
        .append(roomName).append(", Password = ").append(roomPassword).append("]");
        return roomInfo.toString();
    }

    public int getRoomId() {
        return roomId;
    }
    
    public String getRoomName() {
        return roomName;
    }

    public String getRoomPassword() {
        return roomPassword;
    }
}