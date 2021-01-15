package com.leeting.myapp.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leeting.myapp.dao.MemberDao;
import com.leeting.myapp.dao.MemberDaoImpl;
import com.leeting.myapp.service.MemberService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private MemberService service;
  //회원정보
  @ApiOperation(value = "회원정보", notes = "회원정보", response = Map.class)
  @GetMapping("")
  public ResponseEntity<Map<String, Object>> getMemberInfo(HttpServletRequest req) throws SQLException {
    System.out.println(req);

    Map<String, Object> resultMap = new HashMap<>();
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("get to /member done");
    System.out.println("회원정보");
    return new ResponseEntity<Map<String, Object>>(resultMap, status);
  }
  
  //로그인
  @ApiOperation(value = "로그인", notes = "로그인", response = Map.class)
  @PostMapping("/login")
  public ResponseEntity<Map<String, Object>> loginMember(HttpServletRequest req) throws SQLException {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member/login done");
    System.out.println("로그인");
    return new ResponseEntity<Map<String, Object>>(resultMap, status);
  }
  
  //로그아웃
  @ApiOperation(value = "로그아웃", notes = "로그아웃", response = Map.class)
  @PostMapping("/logout")
  public ResponseEntity<Map<String, Object>> logoutMember(HttpServletRequest req) {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member/logout done");
    System.out.println("로그아웃");
    return new ResponseEntity<Map<String, Object>>(resultMap, status);
  }
  
  //회원가입
  @ApiOperation(value = "회원가입", notes = "회원가입", response = Map.class)
  @PostMapping("")
  public ResponseEntity<Map<String, Object>> joinMember(HttpServletRequest req) {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member done");
    System.out.println("회원가입");
    return new ResponseEntity<Map<String, Object>>(resultMap, status);
  }
  
  //회원탈퇴
  @ApiOperation(value = "회원탈퇴", notes = "회원탈퇴", response = Map.class)
  @DeleteMapping("")
  public ResponseEntity<Map<String, Object>> deleteMember(HttpServletRequest req) {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("delete to /member done");
    System.out.println("회원탈퇴");
    return new ResponseEntity<Map<String, Object>>(resultMap, status);
  }
  
  //회원수정
  @ApiOperation(value = "회원수정", notes = "회원수정", response = Map.class)
  @PutMapping("")
  public ResponseEntity<Map<String, Object>> updateMember(HttpServletRequest req) {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("put to /member done");
    System.out.println("회원수정");
    return new ResponseEntity<Map<String, Object>>(resultMap, status);
  }
}
