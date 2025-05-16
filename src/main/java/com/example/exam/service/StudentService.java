package com.example.exam.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exam.model.Student;
import com.example.exam.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentByRegNo(String regNo) {
        return studentRepository.findById(regNo);
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(String regNo) {
        studentRepository.deleteById(regNo);
    }

    public List<Student> searchStudents(String keyword) {
        return studentRepository.findByNameContainingIgnoreCaseOrRegNoContainingIgnoreCase(keyword, keyword);
    }
}

