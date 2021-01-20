package com.leeting.myapp.service;

import com.leeting.myapp.model.ContentDto;

import java.util.List;

public interface ContentService {
    boolean enrollContent(ContentDto contentDto);
    List<ContentDto> findContent(); // 특정 컨텐츠 조회, 파라미터 미정
    List<ContentDto> listContent(); // 컨텐츠 전체 리스트
    boolean deleteContent(int contentno);
    boolean updateContent(ContentDto contentDto);
}
