package com.leeting.myapp.service;

import com.leeting.myapp.model.MemberDto;
import org.springframework.stereotype.Service;

public interface MemberService {

	MemberDto getMemberInfo(Long memberId);
    void join(MemberDto member);
    void delete(MemberDto member);
    void update(MemberDto member);
    void login(MemberDto member);
    void logout(Long memberId);
}
