/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.repo;

import com.example.price_drop_alert_app.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

}
