package com.example.exam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication(scanBasePackages = "com.example.exam")
public class SeatApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeatApplication.class, args);
	}

}
