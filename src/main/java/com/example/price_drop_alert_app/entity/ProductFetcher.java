/*
 * Copyright (c) 2023.
 * Developed By @Nishant Sonar
 */

package com.example.price_drop_alert_app.entity;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.IOException;



/**
 * create a ProductFetcher class with one static method.
 */
public class ProductFetcher {
    private ProductFetcher() {
    }

    /**
     * static method that return the Product class instance which store the details about AMAZON products.
     *
     * @param url that contain the url of product.
     * @return return the Product class instance after save data in DB.
     * @throws IOException if error occur then the error throw.
     */
    public static Product amazonFetcher(String url) throws IOException {

        Document doc = Jsoup.connect(url).userAgent("Mozilla/5.0 (Windows; U; WindowsNT 5.1; en-US; rv1.8.1.6) " +
                "Gecko/20070725 Firefox/2.0.0.6").get();

        Element amazonPriceElement = doc.select(".a-price-whole").first();
        Element amazonProductTitleElem = doc.select("#productTitle").first();
        Product product = new Product();
        product.setProductName(amazonProductTitleElem.text());
        product.setProductURL(url);
        product.setPrice(amazonPriceElement.text());
        return product;
    }

    /**
     * static method that return the Product class instance which store the details about FLIPKART Product
     *
     * @param url that contain the url of product.
     * @return return the Product class instance after save data in DB.
     * @throws IOException if error occur then the error throw.
     */
    public static Product flipkartFetcher(String url) throws IOException {

        Document doc = Jsoup.connect(url).get();
        Element productNameElement = doc.select("span.B_NuCI").first();
        String productName = productNameElement.text();
//        Elements productPriceElements = doc.select("div._30jeq3._16Jk6d");
//        Element productPriceElement = productPriceElements.first();
        Product p = new Product();
        p.setProductName(productName);
        p.setProductURL(url);
        return p;
    }

    public static String amazonPrice(String url) throws IOException {

        Document document = Jsoup.connect(url).userAgent("Mozilla/5.0 (Windows; U; WindowsNT 5.1; en-US; rv1.8.1.6) " +
                "Gecko/20070725 Firefox/2.0.0.6").get();

        Element amazonPriceElement = document.select(".a-price-whole").first();

        return amazonPriceElement.text();

    }

    public static String flipkartPrice(String url) throws IOException {
        Document doc = Jsoup.connect(url).get();
        Element productPriceElement = doc.select("div._30jeq3._16Jk6d").first();
        return productPriceElement.text();
    }


}
