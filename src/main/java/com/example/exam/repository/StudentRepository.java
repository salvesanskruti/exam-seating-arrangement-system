package com.example.exam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.exam.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
    List<Student> findByNameContainingIgnoreCaseOrRegNoContainingIgnoreCase(String name, String regNo);
}
