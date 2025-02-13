package com.example.price_drop_alert_app.service;

import com.example.price_drop_alert_app.entity.Product;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.orm.jpa.JpaObjectRetrievalFailureException;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.Properties;

@Service
public class EmailService {

    @KafkaListener(topics = "signup-topic", groupId = "my-group")
    public void sendEmail(String email){
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        String username = "nishantsonar9@gmail.com";
        String password = "czvxcrkiubwkibvc";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);

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
            String body = "Dearest Nishant" + ",\n\n\t"
                    + "Our hearts are filled with joy, "
                    + "As we bring you news of a lower price for .\n\t\t"
                    + "The price has dropped below your set threshold price of ₹ "
                    + "And the new price is now ₹ , which is ₹  lower.\n\t"
                    + "If your heart desires at this price, "
                    + "Please follow the link below to view the product page:\n\n   \n\n\t\t"
                    + "May your day be filled with beauty and wonder, "
                    + "And may bring you the eternal bloom of happiness.\n\n"
                    + "With love and warmth,\n"
                    + "\t DealWatcher.com";

            message.setText(body);
            Transport.send(message);
        System.out.println("Sending welcome email to: " + email);

        }catch (Exception e) {
            e.printStackTrace();

        }
    }
}
