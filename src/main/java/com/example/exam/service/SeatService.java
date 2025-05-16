package com.example.exam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exam.model.Seat;
import com.example.exam.repository.SeatRepository;

@Service
public class SeatService {
    @Autowired
    private SeatRepository seatRepository;

    public Seat getSeatByRegistrationNumber(String registrationNumber) {
        Object result = seatRepository.findByRegistrationNumber(registrationNumber);
        if (result instanceof Seat) {
            return (Seat) result;
        } else {
            throw new ClassCastException("Expected Seat but found " + result.getClass().getSimpleName());
        }
    }
 
}
