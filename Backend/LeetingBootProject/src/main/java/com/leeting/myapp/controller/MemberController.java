package com.leeting.myapp.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leeting.myapp.dao.MemberDao;
import com.leeting.myapp.dao.MemberDaoImpl;
import com.leeting.myapp.model.MemberDto;
import com.leeting.myapp.service.JwtService;
import com.leeting.myapp.service.MemberService;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/member")
public class MemberController {

  // service
  private final MemberService memberService;

  @Autowired
  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  @Autowired
  private JwtService jwtService;
  @Autowired
  public JavaMailSender javaMailSender;

  // 회원정보
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

  // 로그인
  @ApiOperation(value = "로그인", notes = "로그인", response = Map.class)
  @PostMapping("/login")
  public ResponseEntity<String> loginMember(@RequestBody MemberDto memberbody, HttpServletRequest req)
      throws SQLException {
    System.out.println(req);
    String conclusion = "";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member/login done");
    System.out.println("로그인");
    if (memberService.login(memberbody)) {
      conclusion = "SUCESS";
    } else {
      conclusion = "FAIL";
    }
    String token = jwtService.create("id", memberbody.getId(), "id");
    System.out.println(token);
    System.out.println(jwtService.get("id", token));
    return new ResponseEntity<String>(conclusion, status);
  }

  // 중복검사
  @ApiOperation(value = "중복검사", notes = "중복검사", response = Map.class)
  @PostMapping("/same")
  public ResponseEntity<String> sameMember(@RequestBody Map<String, String> memberbody, HttpServletRequest req)
      throws SQLException {
    System.out.println(req);
    String conclusion = "";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("get to /member/same done");
    System.out.println("중복검사");
    if (memberService.sameId(memberbody.get("id"))) {
      conclusion = "SUCESS";
    } else {
      conclusion = "FAIL";
    }
    return new ResponseEntity<String>(conclusion, status);
  }

  // 중복검사
  @ApiOperation(value = "중복검사", notes = "중복검사", response = Map.class)
  @PostMapping("/samenick")
  public ResponseEntity<String> sameNick(@RequestBody Map<String, String> memberbody, HttpServletRequest req)
      throws SQLException {
    System.out.println(req);
    String conclusion = "";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("get to /member/samenick done");
    System.out.println("중복검사");
    if (memberService.sameNick(memberbody.get("nickname"))) {
      conclusion = "SUCESS";
    } else {
      conclusion = "FAIL";
    }
    return new ResponseEntity<String>(conclusion, status);
  }

  // 로그아웃
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

  // 회원가입
  @ApiOperation(value = "회원가입", notes = "회원가입", response = Map.class)
  @PostMapping("join")
  public ResponseEntity<String> joinMember(@RequestBody MemberDto memberbody, HttpServletRequest req) {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    String conclusion = "";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member done");
    System.out.println("회원가입");
    if (memberService.join(memberbody)) {
      conclusion = "SUCESS";
    } else {
      conclusion = "FAIL";
    }
    return new ResponseEntity<String>(conclusion, status);
  }

  // 회원탈퇴
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

  // 회원수정
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
