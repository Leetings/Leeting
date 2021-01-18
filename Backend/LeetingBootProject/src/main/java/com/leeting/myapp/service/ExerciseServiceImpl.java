package com.leeting.myapp.service;

import com.leeting.myapp.dao.ExerciseDao;
import com.leeting.myapp.dao.MemberDao;
import com.leeting.myapp.model.ExerciseDto;
import com.leeting.myapp.model.MemberDto;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseServiceImpl implements ExerciseService{
    
	private final ExerciseDao exerciseDao;
	
	public ExerciseServiceImpl(ExerciseDao exerciseDao){
	    this.exerciseDao = exerciseDao;
    }

	
	@Override
    public boolean enrollExercise(Map<String,String> exerciseMeeting) {
	      try {
				System.out.println("확인");
	    	  exerciseDao.enrollExercise(exerciseMeeting);
	            return true;
	        } catch (SQLException throwables) {
	            throwables.printStackTrace();
	            return false;
	        }
    }
	
	@Override
    public List<ExerciseDto> listExercise() throws SQLException {

	    	return exerciseDao.listExercise();

    }
}
