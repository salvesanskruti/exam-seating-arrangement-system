package com.example.exam.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exam.model.User;
import com.example.exam.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // Adjust according to frontend URL
public class UserController {

    @Autowired
    UserService userService;

   @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
    try {
        userService.registerUser(user);
        return ResponseEntity.ok(Map.of("success", true, "message", "User registered successfully!"));
    } catch (Exception e) {
        return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Signup failed!"));
        }
    }
    


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        Optional<User> user = userService.loginUser(
            loginData.get("email"),
            loginData.get("password"),
            loginData.get("role")
        );
        
    if (user.isPresent()) {
        User u = user.get();
        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Login successful!",
            "username", u.getUsername(),
            "email", u.getEmail(),
            "role", u.getRole() // 👈 Send the role back to frontend
        ));
    } else {
        return ResponseEntity.status(401).body(Map.of("success", false, "message", "Invalid email or password!"));
    }
}



    @GetMapping("/")
    public Map<String, String> home() {
    return Map.of("message", "Welcome to Exam System API!");
    }

    }


