package com.example.price_drop_alert_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    private final KafkaTemplate<String,String> kafkaTemplate;

    @Autowired
    public SignupService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void signUp(String email){
        // Simulate user signup
        System.out.println("User signed up with email: " + email);

        kafkaTemplate.send("signup-topic",email);
    }


}
