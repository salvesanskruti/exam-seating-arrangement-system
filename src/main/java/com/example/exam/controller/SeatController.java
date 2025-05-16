    package com.example.exam.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exam.model.Seat;
import com.example.exam.service.SeatService;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

@RestController
@RequestMapping("/api/seats")
public class SeatController {

    @Autowired
    private SeatService seatService;

    @GetMapping("/{registrationNumber}")
    public ResponseEntity<Seat> getSeatDetails(@PathVariable String registrationNumber) {
        Seat seat = seatService.getSeatByRegistrationNumber(registrationNumber);
        if (seat != null) {
            System.out.println("Seat details: " + seat.getRegistrationNumber()
                + ", " + seat.getSeatNumber()
                + ", " + seat.getRoomNumber()
                + ", " + seat.getlocation());
            return ResponseEntity.ok(seat);
        } else {
            System.out.println("No seat found for registration number: " + registrationNumber);
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ NEW: QR Code generation endpoint
    @GetMapping(value = "/qr/{registrationNumber}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> getQRCode(@PathVariable String registrationNumber) throws WriterException, IOException {
        Seat seat = seatService.getSeatByRegistrationNumber(registrationNumber);
        if (seat == null) {
            return ResponseEntity.notFound().build();
        }

        String qrText = "Name: " + seat.getStudentName() + "\n" +
                        "Reg No: " + seat.getRegistrationNumber() + "\n" +
                        "Seat: " + seat.getSeatNumber() + "\n" +
                        "Room: " + seat.getRoomNumber() + "\n" +
                        "Location: " + seat.getlocation();

        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(qrText, BarcodeFormat.QR_CODE, 300, 300);

        ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutputStream);
        byte[] pngData = pngOutputStream.toByteArray();

        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(pngData);
    }
}

