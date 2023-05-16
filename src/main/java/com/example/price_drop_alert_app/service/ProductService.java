/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.service;

import com.example.price_drop_alert_app.entity.Product;
import com.example.price_drop_alert_app.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepo repository;

    public Product saveProduct(Product product) {
        return repository.save(product);
    }

}
