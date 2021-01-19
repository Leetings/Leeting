package com.leeting.myapp.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.leeting.myapp.model.MemberDto;

import com.leeting.myapp.service.JwtService;
import com.leeting.myapp.service.MemberService;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/member")
public class MemberController {
	  @Autowired
  // service
  private  MemberService memberService;



  @Autowired
  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }
  @Autowired
  private JwtService jwtService;
  @Autowired
  public JavaMailSender javaMailSender;
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
  public ResponseEntity<String> loginMember(@RequestBody MemberDto memberbody, HttpServletRequest req) throws SQLException {
    System.out.println(req);
    String conclusion ="";
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
  //중복검사
  @ApiOperation(value = "중복검사", notes = "중복검사", response = Map.class)
  @PostMapping("/same")
  public ResponseEntity<String> sameMember(@RequestBody Map<String,String> memberbody, HttpServletRequest req) throws SQLException {
    System.out.println(req);
    String conclusion ="";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("get to /member/same done");
    System.out.println("중복검사");
    if(memberService.sameId(memberbody.get("id"))) {
    	conclusion = "SUCESS";
    }
    else {
    	conclusion = "FAIL";
    }
    return new ResponseEntity<String>(conclusion, status);
  }
  //중복검사
  @ApiOperation(value = "중복검사", notes = "중복검사", response = Map.class)
  @PostMapping("/samenick")
  public ResponseEntity<String> sameNick(@RequestBody Map<String,String> memberbody, HttpServletRequest req) throws SQLException {
    System.out.println(req);
    String conclusion ="";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("get to /member/samenick done");
    System.out.println("중복검사");
    if(memberService.sameNick(memberbody.get("nickname"))) {
    	conclusion = "SUCESS";
    }
    else {
    	conclusion = "FAIL";
    }
    return new ResponseEntity<String>(conclusion, status);
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
  @PostMapping("join")
  public ResponseEntity<String> joinMember(@RequestBody MemberDto memberbody, HttpServletRequest req) {
    System.out.println(req);
    Map<String, Object> resultMap = new HashMap<>();
    String conclusion = "";
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member done");
    System.out.println("회원가입");
    if(memberService.join(memberbody)) {
    	conclusion = "SUCESS";
    }
    else {
    	conclusion = "FAIL";
    }
    return new ResponseEntity<String>(conclusion, status);
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
  @ApiOperation(value = "이메일인증", notes = "이메일인증", response = Map.class)
  @GetMapping("/email")
  public ResponseEntity<String> email( HttpServletRequest req) throws SQLException {
    System.out.println(req);
    HttpStatus status = HttpStatus.ACCEPTED;
    System.out.println("post to /member/email done");
    System.out.println("이메일 인증");
    SimpleMailMessage message = new SimpleMailMessage();
    String memberbody="";
    memberbody = "stfantasy3324@gmail.com";
    message.setTo(memberbody);
    message.setFrom("Leeting@naver.com");
    message.setSubject("이메일인증입니다");
    StringBuilder sb = new StringBuilder();
    String tmp = getTempAuth();
    sb.append("인증번호는 ");
    sb.append(tmp);
    sb.append(" 입니다");
    message.setText(tmp);
    javaMailSender.send(message);
    String token = jwtService.create("email", tmp, "email");
    System.out.println(token);
    System.out.println(jwtService.get("email", token));
    return new ResponseEntity<String>(token, status);
  }
  public String getTempAuth(){
      char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
              'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

      String str = "";

      int idx = 0;
      for (int i = 0; i < 10; i++) {
          idx = (int) (charSet.length * Math.random());
          str += charSet[idx];
      }
      return str;
  }
}
