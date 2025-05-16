package com.example.exam.service;



import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.exam.util.CsvHelper;
import com.example.exam.util.ExcelHelper;

@Service
public class UploadService {

    public ResponseEntity<?> processCSV(MultipartFile file) {
        try {
            CsvHelper.parseCSV(file.getInputStream());
            return ResponseEntity.ok("CSV uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("CSV upload failed: " + e.getMessage());
        }
    }

    public ResponseEntity<?> processExcel(MultipartFile file) {
        try {
            ExcelHelper.parseExcel(file.getInputStream());
            return ResponseEntity.ok("Excel uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Excel upload failed: " + e.getMessage());
        }
    }
}
