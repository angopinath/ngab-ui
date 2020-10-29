package com.nithi.ngabui;

import com.nithi.ngabui.model.Employee;
import com.nithi.ngabui.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public Collection<Employee> redirect() {
        return employeeRepository.findAll();
    }
}
