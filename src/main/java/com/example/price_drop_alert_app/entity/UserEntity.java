package com.example.price_drop_alert_app.entity;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

import java.util.List;

@Entity
@Table(name = "USER_DETAILS")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CUSTOMER_ID")
    private long id;

    private String fullName;

    private String email;

    private String password;

    private String phoneNo;

    private boolean active;

    private String roles;
    @OneToMany(fetch = FetchType.EAGER,targetEntity = Product.class, cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "CUSTOMER_ID_FK", referencedColumnName = "CUSTOMER_ID")
    private List<Product> links;

    public UserEntity() {
    }

    public UserEntity(@NotNull String fullName, @NotNull String email, @NotNull String password,
                      @NotNull String phoneNo, boolean active, String roles, List<Product> links) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.active = active;
        this.roles = roles;
        this.links = links;
    }

    public long getId() {
        return id;
    }

    public void setId(long uuid) {
        this.id = uuid;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String userName) {
        this.email = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public List<Product> getLinks() {
        return links;
    }

    public void setLinks(List<Product> links) {
        this.links = links;
    }
}
