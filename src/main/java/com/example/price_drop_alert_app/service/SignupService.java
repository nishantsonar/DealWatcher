package com.example.price_drop_alert_app.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    private static final Logger log = LoggerFactory.getLogger(SignupService.class);
    private final KafkaTemplate<String,String> kafkaTemplate;

    @Autowired
    public SignupService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void signUp(String email){
        // Simulate user signup
        log.info("User signed up with email: {}" , email);

        kafkaTemplate.send("signup-topic",email);
    }


}
