// 3.Object-Oriented Programming - Employee Management System

import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("----------------------");
    }
}

public class EmployeeMain {
    public static void main(String[] args) {

        List<Employee> employees = new ArrayList<>();

        // Adding employee objects
        employees.add(new Employee(101, "Alice", 50000));
        employees.add(new Employee(102, "Bob", 60000));
        employees.add(new Employee(103, "Charlie", 55000));

        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
