package com.itwillbs.gittest_kjh.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itwillbs.gittest_kjh.mapper.MemberMapper;
import com.itwillbs.gittest_kjh.vo.MemberVO;

@Service
public class MemberService {
	@Autowired
	private MemberMapper mapper;

	// 회원 가입 요청
	public int registMember(MemberVO member) {
		return mapper.insertMember(member);
	}

	// 회원 패스워드 조회 요청
	public String getMemberPasswd(String id) {
		return mapper.selectMemberPasswd(id);
	}

	// 회원 상세정보 조회 요청
	public MemberVO getMember(MemberVO member) {
		return mapper.selectMember(member);
	}
	
	// 회원 정보 수정 요청
	public int modifyMember(Map<String, String> map) {
		return mapper.updateMember(map);
	}

	// 회원 탈퇴 요청
	public int withdrawMember(String id) {
		// MemberMapper - updateMemberStatus()
		// 파라미터 - id, 회원 상태값(정수 / 1: 정상, 2: 휴면, 3: 탈퇴)
		return mapper.updateMemberStatus(id, 3);
	}
}
