package com.example.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.exam.model.Seat;


@Repository
public interface SeatRepository extends JpaRepository<Seat, Long> {
    Seat findByRegistrationNumber(String registrationNumber);
}