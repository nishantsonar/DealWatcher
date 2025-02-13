package com.example.price_drop_alert_app.service;

import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class EmailService {
    private static final Logger log = LoggerFactory.getLogger(EmailService.class);
    @Value("${email.username}")
    private String username;
    @Value("${email.password}")
    private String password;

    private Message getSession(){
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.host", "smtp.gmail.com");

        Session session= Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
        return new MimeMessage(session);
    }
    @KafkaListener(topics = "signup-topic", groupId = "my-group")
    public void sendEmail(String email){

        try {
       Message message=getSession();

            String to = email;

            message.setRecipients(Message.RecipientType.TO, new InternetAddress[]{new InternetAddress(to)});

            message.setFrom(new InternetAddress("nishantsonar9@gmail.com"));
                        /*
                        setUp Subject of email.
                         */
            message.setSubject("Welcome Message");
                        /*
                        righting a body of email.
                         */
            String body = """
                     Dearest Nishant,
                     
                        With love and warmth,
                        DealWatcher.com
                     """;

            message.setText(body);
            Transport.send(message);
        log.info("Sending welcome email to: {}" , email);

        }catch (Exception e) {
            e.printStackTrace();

        }
    }
}
