package xyz.toys.toy1.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class MainController implements ErrorController {
    @GetMapping({"/", "error"})
    public String index(){
        return "index.html";
    }

    @RequestMapping(value = "/error")
    public String handleNoHandleFoundException(HttpServletResponse response, HttpServletRequest request) {
        return "/error";
    }
    
}
