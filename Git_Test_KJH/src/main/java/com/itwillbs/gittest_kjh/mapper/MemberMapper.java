package com.itwillbs.gittest_kjh.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.itwillbs.gittest_kjh.vo.MemberVO;

@Mapper
public interface MemberMapper {

	// 회원 가입 요청
	int insertMember(MemberVO member);

	// 회원 패스워드 조회
	String selectMemberPasswd(String id);
	
	// 회원 상세정보 조회
	MemberVO selectMember(MemberVO member);

	// 회원 상세정보 수정
	int updateMember(Map<String, String> map);
//	int updateMember(Map<String, Object> map);

	// 회원 탈퇴 (파라미터가 2개이므로 @Param 어노테이션 필요)
	int updateMemberStatus(@Param("id") String id,@Param("member_status") int member_status);
	
}
