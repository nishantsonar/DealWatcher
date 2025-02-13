/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.controller;

import com.example.price_drop_alert_app.entity.UserEntity;
import com.example.price_drop_alert_app.service.IUserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final IUserEntityService userEntityService;

    @Autowired
    public AdminController(IUserEntityService userEntityService) {
        this.userEntityService = userEntityService;
    }



    @GetMapping("/")
    public String home() {
        return "ADMIN page";
    }
    //	DONE

    @PostMapping("/add")
    @PreAuthorize("hasAnyRole(ROLE_USER,ROLE_ADMIN)")
//    @CrossOrigin(origins = "http://localhost:3000")
    public UserEntity addCustomer(@RequestBody UserEntity customer) {
        customer.setRoles("ROLE_USER,ROLE_ADMIN");
        return userEntityService.addUserEntity(customer);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserEntity> update(@PathVariable Long id, @RequestBody UserEntity userEntity) {
        UserEntity updateUserEntity = userEntityService.getUserEntity(id);
        updateUserEntity.setFullName(userEntity.getFullName());
        updateUserEntity.setEmail(userEntity.getEmail());
        updateUserEntity.setPhoneNo(userEntity.getPhoneNo());
        updateUserEntity.setPassword(userEntity.getPassword());
        userEntityService.save(updateUserEntity);
        return ResponseEntity.ok(updateUserEntity);
    }

    @RequestMapping("/login")
    @PostMapping
    public UserEntity login(@RequestBody String[] a)  {
        String unameString = a[0];
        String passwd = a[1];
        UserEntity c = userEntityService.login(unameString, passwd);
        if (c != null) {
            return c;
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
