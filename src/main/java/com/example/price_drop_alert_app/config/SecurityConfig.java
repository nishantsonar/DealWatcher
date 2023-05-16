package com.example.price_drop_alert_app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * creating the SecurityConfig class and annotate with Configuration and EnableMethodSecurity.
 */
@Configuration
@EnableMethodSecurity
public class SecurityConfig {
    /**
     * Creating bean of PasswordEncoder which encode password.
     *
     * @return return the instance of PasswordEncoder.
     */
    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * creating bean of AuthenticationManager that return the instance of configuration.getAuthenticationManager().
     *
     * @param configuration get the AuthenticationConfiguration.
     * @return return the instance of tion.getAuthenticationManager().
     * @throws Exception if any error or exception occur they throw exception.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    /**
     * setting up the which url are accessible publicly.
     *
     * @param httpSecurity that give the instance of HttpSecurity.
     * @return return the instance of SecurityFilterChain.
     * @throws Exception if any error or exception occur they throw exception.
     */
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

//        httpSecurity.csrf().and().cors().disable()
//                .authorizeHttpRequests(authorize ->
//                        authorize.requestMatchers("/user/add-link", "/user/add/",
//                                        "user/login/", "/user/getid", "/admin/add", "/admin/login")
//                                .permitAll()
//                                .anyRequest().authenticated()
//
//                ).sessionManagement(session -> session
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                ).httpBasic(Customizer.withDefaults());
//        return httpSecurity.build();
        return httpSecurity.csrf().disable().cors().disable().authorizeHttpRequests(auth -> auth.requestMatchers("/user/login",
                "/user/add-link",
                "/user" +
                "/add/", "/user/getid").permitAll().anyRequest().authenticated()).build();
    }

//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedOrigins("*")
//                        .allowedMethods("GET", "POST", "PUT", "DELETE")
//                        .allowedHeaders("*");
//            }
//        };
//    }

}
