/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.entity;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "product_url")
    private String productURL;
    @Column(name = "price")
    private String price;


    public Product() {
    }

    public Product(Long productId, String productName, String productURL, String price) {
        this.productId = productId;
        this.productName = productName;
        this.productURL = productURL;
        this.price = price;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }


    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long id) {
        this.productId = id;
    }

    public String getProductURL() {
        return productURL;
    }

    public void setProductURL(String productURL) {
        this.productURL = productURL;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productURL='" + productURL + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
