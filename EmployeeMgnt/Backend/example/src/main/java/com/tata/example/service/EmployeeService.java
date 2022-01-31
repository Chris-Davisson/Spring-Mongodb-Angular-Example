package com.tata.example.service;

import com.tata.example.model.Employee;

import java.util.Date;
import java.util.List;

public interface EmployeeService {
    List<Employee> getEmployees();
    Employee getEmployeeById(String loginId);
    void addEmployee(Employee employee);
    void updateEmployee(Employee employee);
    void deleteEmployee(String loginId);
}
