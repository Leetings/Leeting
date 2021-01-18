package com.leeting.myapp.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.leeting.myapp.model.ExerciseDto;

public interface ExerciseDao {
	public void enrollExercise(Map<String,String> exerciseMeeting) throws SQLException;
    public List<ExerciseDto> listExercise()  throws SQLException;
}