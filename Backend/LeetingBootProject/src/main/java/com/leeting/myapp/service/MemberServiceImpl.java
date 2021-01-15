package com.leeting.myapp.service;

import com.leeting.myapp.dao.MemberDao;
import com.leeting.myapp.model.MemberDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
    
	@Autowired
	private MemberDao dao;
    // DB 필요

    @Override
    public MemberDto getMemberInfo(Long memberId) {
        return null;
    }

    @Override
    public void join(MemberDto member) {

    }

    @Override
    public void delete(MemberDto member) {

    }

    @Override
    public void update(MemberDto member) {

    }

    @Override
    public void login(MemberDto member) {
    	
    }

    @Override
    public void logout(Long memberId) {

    }
}
