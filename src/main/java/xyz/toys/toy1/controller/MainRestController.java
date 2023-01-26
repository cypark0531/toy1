package xyz.toys.toy1.controller;

import org.springframework.web.bind.annotation.RestController;

import xyz.toys.toy1.service.UserService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class MainRestController {
    @Autowired
    private UserService userService;

    @GetMapping(value="/home")
    public String home() {
        return "home";
    }
    @GetMapping(value="/about")
    public List list(@RequestParam(name = "name") String name) {
        return Arrays.asList(name,"바보야");
    }
    @GetMapping(value="/user")
    public List userLIst(){
        return userService.userList();
    }
}
