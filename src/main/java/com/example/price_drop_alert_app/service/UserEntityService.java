/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.service;

import com.example.price_drop_alert_app.entity.MyUserDetails;
import com.example.price_drop_alert_app.entity.UserEntity;
import com.example.price_drop_alert_app.repo.ProductRepo;
import com.example.price_drop_alert_app.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserEntityService implements IUserEntityService, UserDetailsService {
    @Autowired
    private UserRepo customerRepo;
    @Autowired
    private ProductRepo productRepo;

    private PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    public UserEntity addUserEntity(UserEntity users) {
        users.setPassword(passwordEncoder().encode(users.getPassword()));
        return customerRepo.save(users);
    }

    @Override
    public List<UserEntity> getAllUserEntity() {
        return customerRepo.findAll();
    }

    @Override
    public UserEntity getUserEntity(Long id) throws UsernameNotFoundException {
        Optional<UserEntity> u = customerRepo.findById(id);
        if (u.isPresent()) {
            return u.get();
        } else {
            throw new UsernameNotFoundException("User Not Found!");
        }
    }

    @Override
    public UserEntity login(String uname, String passwd) {
        UserEntity c = customerRepo.findByEmail(uname).get();
        boolean b = passwordEncoder().matches(passwd, c.getPassword());
        if (b) {
            return c;
        } else throw new UsernameNotFoundException("User not found " + uname);

    }


    @Override
    public void save(UserEntity userEntity) {
        customerRepo.save(userEntity);
    }

    @Override
    public void delete(Long id) {
        customerRepo.deleteById(id);
    }


    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<UserEntity> user = customerRepo.findByEmail(userName);
        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));

        return user.map(MyUserDetails::new).get();
    }


    @Override
    public long getid(String email) {
        long user = customerRepo.findByEmail(email).get().getId();
        return user;
    }
}
