package com.tata.example.model;

import org.springframework.data.annotation.Id;

import java.util.Date;
//import javax.persistence.Entity;
//
//@Entity
public class Employee {
//    @Id
//    private long id;
    @Id
    private String loginId;
    private String name;
    private String email;
    private Date dob;
    private String designation;
    private String department;


    public Employee(String loginId, String name, String email, Date dob, String designation , String department) {
        this.loginId = loginId;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.designation = designation;
        this.department = department;
    }

    public String getDepartment() {
        return this.department;
    }
    public String getId() {
        return loginId;
    }

    public String getLoginId() {
        return loginId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Date getDob() {
        return dob;
    }

    public String getDesignation() {
        return designation;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id='" + loginId + '\'' +
                ", loginId='" + loginId + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", designation='" + designation + '\'' +
                '}';
    }
}

