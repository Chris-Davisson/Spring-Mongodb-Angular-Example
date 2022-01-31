package com.tata.example.service;

import com.tata.example.model.Employee;
import com.tata.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository repo;


    @Override
    public List<Employee> getEmployees() {
        List<Employee> list = repo.findAll();
        return  list;
    }

    @Override
    public Employee getEmployeeById(String loginId) {
        return  null;

    }

    @Override
    public void addEmployee(Employee employee) {
        System.out.println("employee service impl");
        repo.save(employee);
    }

    @Override
    public void updateEmployee(Employee employee) {
        repo.save(employee);
    }

    @Override
    public void deleteEmployee(String loginId) {
        System.out.println("here");
        repo.deleteById(loginId);
    }
}
