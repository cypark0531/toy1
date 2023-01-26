package xyz.toys.toy1.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import xyz.toys.toy1.vo.UserVo;

@Mapper
public interface UserMapper {
    public List<UserVo> userList();
}
