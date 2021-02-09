package com.leeting.myapp.dao;

import java.sql.SQLException;

import com.leeting.myapp.model.AnswerDto;

public interface AnswerDao {

	void writeAnswer(AnswerDto answer) throws SQLException;

	AnswerDto getAnswerInfo(int questionno);

	void updateAnswer(AnswerDto answer);

	void deleteAnswer(int answerno);

}
