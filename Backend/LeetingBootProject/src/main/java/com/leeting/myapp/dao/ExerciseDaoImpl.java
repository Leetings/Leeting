package com.leeting.myapp.dao;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.leeting.myapp.model.ExerciseDto;

@Repository
public class ExerciseDaoImpl implements ExerciseDao{

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void enrollExercise(Map<String,String> exerciseMeeting)  throws SQLException{
		sqlSession.insert("exercise.enrollExercise",exerciseMeeting);
	}
	
	@Override
    public List<ExerciseDto> listExercise()  throws SQLException{
		return sqlSession.selectList("exercise.listExercise");
	}
}