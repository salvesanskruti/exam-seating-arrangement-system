package com.example.exam.util;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;


public class CsvHelper {
    public static void parseCSV(InputStream inputStream) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
             CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader())) {
             
            for (CSVRecord record : csvParser) {
                String regNo = record.get("registration_number");
                String name = record.get("student_name");
                String department = record.get("department");
                // Save or process this data
                System.out.println(regNo + " | " + name + " | " + department);
            }
        }
    }
}
