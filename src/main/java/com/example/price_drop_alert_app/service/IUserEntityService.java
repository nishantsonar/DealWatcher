/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.service;

import com.example.price_drop_alert_app.entity.UserEntity;

import java.util.List;


public interface IUserEntityService {
     UserEntity addUserEntity(UserEntity users);

    List<UserEntity> getAllUserEntity();

     UserEntity getUserEntity(Long id);
     UserEntity login(String uname, String passwd);

     void save(UserEntity userEntity);

     void delete(Long id);
     long getid(String email);

}
