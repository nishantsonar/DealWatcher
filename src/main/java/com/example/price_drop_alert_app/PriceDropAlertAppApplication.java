package com.example.price_drop_alert_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class PriceDropAlertAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(PriceDropAlertAppApplication.class, args);
    }

}
