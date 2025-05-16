package com.example.exam.controller;



import com.example.exam.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin
public class UploadController {

    @Autowired
    private UploadService uploadService;

    @PostMapping("/csv")
    public ResponseEntity<?> uploadCSV(@RequestParam("file") MultipartFile file) {
        return uploadService.processCSV(file);
    }

    @PostMapping("/excel")
    public ResponseEntity<?> uploadExcel(@RequestParam("file") MultipartFile file) {
        return uploadService.processExcel(file);
    }
}

