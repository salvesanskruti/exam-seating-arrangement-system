package com.example.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.exam.model.Student;
import com.example.exam.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public Student saveStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @PutMapping("/{regNo}")
    public Student updateStudent(@PathVariable String regNo, @RequestBody Student updated) {
        return studentService.getStudentByRegNo(regNo)
            .map(student -> {
                student.setName(updated.getName());
                student.setDepartment(updated.getDepartment());
                student.setSeatNo(updated.getSeatNo());
                return studentService.saveStudent(student);
            }).orElseThrow();
    }

    @DeleteMapping("/{regNo}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String regNo) {
        studentService.deleteStudent(regNo);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public List<Student> searchStudents(@RequestParam String keyword) {
        return studentService.searchStudents(keyword);
    }

    @GetMapping("/{regNo}")
    public ResponseEntity<Student> getStudent(@PathVariable String regNo) {
        return studentService.getStudentByRegNo(regNo)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
