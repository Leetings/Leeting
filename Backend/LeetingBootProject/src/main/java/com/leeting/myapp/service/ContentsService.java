package com.leeting.myapp.service;

import com.leeting.myapp.model.ContentsDto;
import com.leeting.myapp.model.ContentsInfoDto;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface ContentsService {
    boolean enrollContent(ContentsDto contentsDto);
    List<ContentsDto> listContents(String keyword); // 특정 컨텐츠 조회, 파라미터 미정
    List<ContentsDto> listContents(); // 컨텐츠 전체 리스트
    boolean deleteContent(int contentno);
    boolean updateContent(ContentsDto contentsDto);
    void setcontentslike(ContentsDto contentsDto) throws SQLException;
}
