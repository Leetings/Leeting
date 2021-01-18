package com.leeting.myapp.service;


import com.leeting.myapp.model.ExerciseDto;


import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface ExerciseService{
    
	boolean enrollExercise(Map<String,String> exerciseMeeting);
    List<ExerciseDto> listExercise() throws SQLException;
}
