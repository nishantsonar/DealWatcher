package com.example.price_drop_alert_app.controller;

import com.example.price_drop_alert_app.dto.GetUrlIdAndPrice;
import com.example.price_drop_alert_app.dto.GetUserDetails;
import com.example.price_drop_alert_app.entity.Product;
import com.example.price_drop_alert_app.entity.ProductFetcher;
import com.example.price_drop_alert_app.entity.UserEntity;
import com.example.price_drop_alert_app.service.IProductService;
import com.example.price_drop_alert_app.service.IUserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;

/**
 * Create the User controller which start with /user
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

    /**
     * Autowire of IUserEntityService and IProductService interface
     */

    private final IUserEntityService userEntityService;

    private final IProductService productService;

    @Autowired
    public UserController(IUserEntityService userEntityService, IProductService productService) {
        this.userEntityService = userEntityService;
        this.productService = productService;
    }

    /**
     * This is for registration for user, can create account before use service.
     *
     * @param customer It contains the fullName, email, password and phoneNo.
     * @return return the user object that contain the all information.
     */
    @PostMapping("/add/")
    @CrossOrigin(origins = "http://localhost:3000")
    public UserEntity addCustomer(@RequestBody GetUserDetails customer) {
        /**
         * {
         * "fullName":" ",
         * "email":" ",
         * "password":" ",
         * "phoneNo":" "
         * }
         */
        UserEntity user = new UserEntity();
        user.setFullName(customer.fullName());
        user.setEmail(customer.email());
        user.setPassword(customer.password());
        user.setPhoneNo(customer.phoneNo());
        user.setActive(true);
        user.setRoles("ROLE_USER");
        return userEntityService.addUserEntity(user);

    }

    /**
     * Get the URL and Price from user
     *
     * @param getURLIdAndPrice that's include userId, URL and User price
     * @return return the UserEntity class instance
     * @throws IOException if any error occur then throw the exception
     */

    @PostMapping("/add-link")
    public UserEntity addLink(@RequestBody GetUrlIdAndPrice getURLIdAndPrice) throws IOException {
/**
 *{
 *     "id":" ",
 *     "url":" ",
 *     "price":" "
 * }
 */
        Product product = null;
        boolean val = getURLIdAndPrice.url().contains("amazon");
        if (val) {
            product = ProductFetcher.amazonFetcher(getURLIdAndPrice.url());
        } else if ((getURLIdAndPrice.url()).contains("flipkart")) {
            product = ProductFetcher.flipkartFetcher(getURLIdAndPrice.url());
        }
        UserEntity user = userEntityService.getUserEntity(getURLIdAndPrice.id());

        List<Product> productList = user.getLinks();
        if (product != null) {
            product.setPrice(getURLIdAndPrice.price());
            productList.add(product);
            user.setLinks(productList);
            productService.saveProduct(product);
        }
        return user;
    }

    /**
     * It's for User login user can enter their emailId and password.
     *
     * @param usernameAndPassword this can contain an array of string that contain username and password.
     * @return return the user entity class if user present else throw Bad Request.
     */


    @PostMapping(value = "/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public UserEntity login(@RequestBody String[] usernameAndPassword) {
        String unameString = usernameAndPassword[0];
        String passwd = usernameAndPassword[1];
        UserEntity c = userEntityService.login(unameString, passwd);
        if (c != null) {
            return c;
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/getid")
    public long getid(@RequestBody String email) {
        return userEntityService.getid(email);
    }

    @PostMapping("/get")
    public List<UserEntity> getAlls() {
        return userEntityService.getAllUserEntity();
    }

}
