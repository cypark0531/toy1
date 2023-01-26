package xyz.toys.toy1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import xyz.toys.toy1.mapper.UserMapper;
@Service
public class UserService {
    @Autowired UserMapper userMapper;
    public List userList(){
        List list = userMapper.userList();
        return list;
    }
}
