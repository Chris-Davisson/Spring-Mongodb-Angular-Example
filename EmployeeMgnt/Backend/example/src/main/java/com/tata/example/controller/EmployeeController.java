package com.tata.example.controller;

import com.tata.example.model.Employee;
import com.tata.example.repository.EmployeeRepository;
import com.tata.example.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository repo;

    @Autowired
    private EmployeeService empService;

    @GetMapping
    public List<Employee> getEmployees() {
        return empService.getEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable("id") String id) {
        return this.empService.getEmployeeById(id);
    }

    @PostMapping
    @ResponseStatus(value=HttpStatus.OK)
    public void postEmployee(@RequestBody Employee employee){
        System.out.println(employee.toString());
        this.empService.addEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable(value = "id") String loginId){
        this.empService.deleteEmployee(loginId);
    }

}


