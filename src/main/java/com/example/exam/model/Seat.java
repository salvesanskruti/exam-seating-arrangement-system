package com.example.exam.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Seat {
    @Id

    private Long id;
    @Column(name = "registration_number")
    private String registrationNumber;

    @Column(name = "student_name")
    private String studentName;

    @Column(name = "seat_number")
    private String seatNumber;

    @Column(name = "room_number")
    private String roomNumber;

    @Column(name = "location")
    private String location;

    // Getters and Setters
    public String getRegistrationNumber() { return registrationNumber; }
    public void setRegistrationNumber(String registrationNumber) { this.registrationNumber = registrationNumber; }

    public String getStudentName() { return studentName; }
    public void setStudentName(String studentName) { this.studentName = studentName; }

    public String getSeatNumber() { return seatNumber; }
    public void setSeatNumber(String seatNumber) { this.seatNumber = seatNumber; }

    public String getRoomNumber() { return roomNumber; }
    public void setRoomNumber(String roomNumber) { this.roomNumber = roomNumber; }

    public String getlocation() {return location;}
    public void setlocation(String location) { this.location = location;}

}
