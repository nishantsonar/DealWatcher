/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.service;

import com.example.price_drop_alert_app.entity.Product;
import com.example.price_drop_alert_app.entity.ProductFetcher;
import com.example.price_drop_alert_app.entity.UserEntity;
import com.example.price_drop_alert_app.repo.UserRepo;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.orm.jpa.JpaObjectRetrievalFailureException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

@Service
@Component
public class LinkPriceCheckerService {
    private final UserRepo userRepo;
    @Value("${email.username}")
    private String username;
    @Value("${email.password}")
    private String password;

    @Autowired
    public LinkPriceCheckerService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    private String removeSpecialChar(String str) {
        return str.replaceAll("[-+.^:,₹]", "");
    }
    //    @Scheduled(fixedDelay = 3600000) // runs every hour
//    @Scheduled(cron = "0 */1 * ? * *")

    @Scheduled(cron = "${com.scheduled.cron}")
    public void checkLinkPrices() throws IOException {

        /*
         * get all user details.
         */
        List<UserEntity> userEntities = userRepo.findAll();

        /*
         * PROPERTIES CLASS INSTANCE AND SET THE REQUIRED DETAILS
         */
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.host", "smtp.gmail.com");

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        String currentPrice = "";

        /*
         *  creating for loop for iterating over every user
         */
        for (int i = 0; i < userEntities.size(); i++) {

            String fullName = userEntities.get(i).getFullName();
            String emailId = userEntities.get(i).getEmail();
            /*
             *  creating for loop for iterating over every user with their links
             */
            int j = 0;
            while (j < userEntities.get(i).getLinks().size()) {

                String url = userEntities.get(i).getLinks().get(j).getProductURL();
                String productName = userEntities.get(i).getLinks().get(j).getProductName();
                String userPrice = removeSpecialChar(userEntities.get(i).getLinks().get(j).getPrice());
                /*
                  check the URL contain an amazon or flipkart.
                 */
                if (url.contains("https://www.amazon")) {

                    currentPrice = removeSpecialChar(ProductFetcher.amazonPrice(url));

                } else if (url.contains("https://www.flipkart")) {

                    currentPrice = removeSpecialChar(ProductFetcher.flipkartPrice(url));

                }

                /*
                Find out difference between current price and user price.
                 */
                String difference = String.valueOf(Integer.parseInt(userPrice) - Integer.parseInt(currentPrice));
                /*
                if user price is greater than current price then follow bellow code.
                 */
                if (Integer.parseInt(userPrice) >= Integer.parseInt(currentPrice)) {

                    try {
                        Message message = new MimeMessage(session);

                        String to = emailId;

                        message.setRecipients(Message.RecipientType.TO, new InternetAddress[]{new InternetAddress(to)});

                        message.setFrom(new InternetAddress("nishantsonar9@gmail.com"));
                        /*
                        setUp Subject of email.
                         */
                        message.setSubject("Price Drop Alert: " + productName);
                        /*
                        righting a body of email.
                         */
                        String body = "Dearest " + fullName + ",\n\n\t"
                                + "Our hearts are filled with joy, "
                                + "As we bring you news of a lower price for " + productName +
                                ".\n\t\t"
                                + "The price has dropped below your set threshold price of ₹" + userPrice + ", "
                                + "And the new price is now ₹" + currentPrice + ", which is ₹" + difference + " lower.\n\t"
                                + "If your heart desires " + productName + " at this price, "
                                + "Please follow the link below to view the product page:\n\n"
                                + url + "\n\n\t\t"
                                + "May your day be filled with beauty and wonder, "
                                + "And may " + productName + " bring you the eternal bloom of happiness.\n\n"
                                + "With love and warmth,\n"
                                + "\t DealWatcher.com";

                        message.setText(body);
                        Transport.send(message);

                        Iterator<Product> iterator = userEntities.get(i).getLinks().iterator();
                        while (iterator.hasNext()) {
                            if (iterator.next().getProductURL().equals(url)) {
                                iterator.remove();
                                break;
                            }
                        }
                        userRepo.save(userEntities.get(i));

                    } catch (JpaObjectRetrievalFailureException | IndexOutOfBoundsException e) {
                        continue;
                    } catch (Exception e) {
                        e.printStackTrace();

                    }

                }
                j++;
            }
        }

    }

}

