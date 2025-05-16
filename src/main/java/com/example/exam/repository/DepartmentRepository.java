package com.example.exam.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exam.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
