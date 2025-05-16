package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

public class Emailservice {
    @Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendSeatDetails(String toEmail, String studentName, String seatNumber, String roomNumber) {
        String subject = "Exam Seating Arrangement";
        String body = String.format("Hi %s,\n\nYour seat details for the upcoming exam are:\nRoom: %s\nSeat: %s\n\nBest of luck!", 
                                    studentName, roomNumber, seatNumber);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("your_email@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }
}

}
