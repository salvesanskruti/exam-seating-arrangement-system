package com.example.exam.util;

import java.io.InputStream;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelHelper {
    public static void parseExcel(InputStream inputStream) {
        try (XSSFWorkbook workbook = new XSSFWorkbook(inputStream)) {
            Sheet sheet = workbook.getSheetAt(0);
            for (Row row : sheet) {
                if (row.getRowNum() == 0) continue; // skip header
                String regNo = row.getCell(0).getStringCellValue();
                String name = row.getCell(1).getStringCellValue();
                String dept = row.getCell(2).getStringCellValue();

                System.out.println(regNo + " | " + name + " | " + dept);
            }
        } catch (Exception e) {
        }
    }
}




