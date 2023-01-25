package xyz.toys.toy1.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class MainRestController {
    @GetMapping(value="/home")
    public String home() {
        return "home";
    }
    @GetMapping(value="/about")
    public List list(@RequestParam(name = "name") String name) {
        return Arrays.asList(name,"바보야");
    }
    
}
