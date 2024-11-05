package com.itwillbs.gittest_kjh.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.itwillbs.gittest_kjh.vo.BoardVO;

@Mapper
public interface BoardMapper {

	// 게시물 등록
	int insertBoard(BoardVO board);

	// 게시물 목록 조회 (복수개 파라미터 전달 시 @Param 어노테이션을 통해 파라미터명 지정 필수!)
//	List<BoardVO> selectBoardList( String searchType,  String searchKeyword,  int startRow, int listLimit);
	/*
	 * < 게시물 조회 주의사항 >
	 * 
	 */
	List<BoardVO> selectBoardList(
			@Param("searchType") String searchType, 
			@Param("searchKeyword") String searchKeyword, 
			@Param("startRow") int startRow, 
			@Param("listLimit") int listLimit);

	// 전체 게시물 수 조회
//	int selectBoardListCount(String searchType,String searchKeyword);
	
	// 전체 게시물 수 조회 (검색어 기능 추가로 인해 검색어에 대한 게시물 수 조회로 변경)
	int selectBoardListCount(
			@Param("searchType") String searchType, 
			@Param("searchKeyword") String searchKeyword);

	// 게시물 상세정보 조회
	BoardVO selectBoard(int board_num);

	// 게시물 조회수 증가
	void updateReadCount(BoardVO board);

	// 게시물 삭제
	int deleteBoard(int Board_num);

	// 게시물 수정
	int updateBoard(BoardVO board);

}
