package xyz.toys.toy1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class MainController {
    @GetMapping(value="main/")
    public String index() {
        return "main/index.html";
    }
    
}
