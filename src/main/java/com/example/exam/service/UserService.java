package com.example.exam.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exam.model.User;
import com.example.exam.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Removed PasswordEncoder field and constructor dependency

    public User registerUser(User user) {
        user.setRole(user.getRole().toUpperCase()); // Always store uppercase roles
        return userRepository.save(user);
    }
    

    public Optional<User> loginUser(String email, String password, String role) {
        System.out.println("LOGIN ATTEMPT => Email: " + email + ", Password: " + password + ", Role: " + role);
        return userRepository.findByEmailAndPasswordAndRole(email, password, role.toUpperCase());
    }
    
    }
    
    


