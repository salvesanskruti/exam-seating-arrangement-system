package com.example.exam;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;


@SpringBootTest(classes = SeatApplication.class) // Explicitly specify the main class
@TestConfiguration
@EnableAutoConfiguration(exclude = { SecurityAutoConfiguration.class })
public class SeatApplicationTests {

    @Test
    void contextLoads() {
    }
}
