package com.example.exam.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exam.model.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByDepartmentId(Long departmentId);
}

