package com.leeting.myapp.controller;


import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leeting.myapp.model.ExerciseDto;
import com.leeting.myapp.service.ExerciseService;

import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/exercise")
public class ExerciseController {
	
	// service
	  private final ExerciseService exerciseService;
	  
	  @Autowired
	  public ExerciseController(ExerciseService exerciseService) {
	    this.exerciseService = exerciseService;
	  }
	  //운동 미팅 등록
	  @ApiOperation(value = "운동 미팅 등록", notes = "운동 미팅 등록", response = Map.class)
	  @PostMapping("/enroll")
	  public ResponseEntity<String> enrollExercise(@RequestBody Map<String, String> exercise, HttpServletRequest req) {
	    System.out.println(req);
	    String conclusion = "";
	    HttpStatus status = HttpStatus.ACCEPTED;
	    System.out.println("post to /exercise done");
	    System.out.println("운동 미팅 등록");

//	    Map<String, String> map = new HashMap<String,String>();
//	    map.put("maintitle", "test3");
//	    map.put("subtitle", "test3");
//	    if(exerciseService.enrollExercise(map))System.out.println("성공");

	    if(exerciseService.enrollExercise(exercise)) {
	    	conclusion = "SUCESS";
	    }
	    else {
	    	conclusion = "FAIL";
	    }
	    return new ResponseEntity<String>(conclusion, status);
	  }
	  //움동 미팅 목록
	  @ApiOperation(value = "운동 미팅 목록", notes = "운동 미팅 목록", response = List.class)
	  @GetMapping("/list")
	  public ResponseEntity<List<ExerciseDto>> listExercise(@RequestBody ExerciseDto exercise, HttpServletRequest req) throws SQLException {
		   System.out.println(req);
		    Map<String, Object> resultMap = new HashMap<>();
		    HttpStatus status = HttpStatus.ACCEPTED;
		    List<ExerciseDto> list = null;
		    list = exerciseService.listExercise();
		    System.out.println("get to /member done");
		    System.out.println("운동 미팅 목록");
//		    System.out.println(list.get(0).toString());
		    return new ResponseEntity<List<ExerciseDto>>(exerciseService.listExercise(), status);
	  }
}