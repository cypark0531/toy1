package xyz.toys.toy1.vo;

import java.sql.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@RequiredArgsConstructor
public class UserVo {
    private String userId;
    private String userName;
    private String userEmail;
    private String userPassword;
    private Date date;
}
