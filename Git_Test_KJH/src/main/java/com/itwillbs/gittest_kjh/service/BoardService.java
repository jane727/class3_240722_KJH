package com.itwillbs.gittest_kjh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itwillbs.gittest_kjh.mapper.BoardMapper;
import com.itwillbs.gittest_kjh.vo.BoardVO;

@Service
public class BoardService {
	@Autowired
	private BoardMapper mapper;

	// 게시물 등록 요청을 위한 registBoard()
	public int registBoard(BoardVO board) {
		// BoardMapper - insertBoard()
		return mapper.insertBoard(board);
	}

	// 게시물 목록 조회 요청을 위한 getBoardList()
	public List<BoardVO> getBoardList(String searchType, String searchKeyword, int startRow, int listLimit) {
		// BoardMapper - selectBoardList()
		return mapper.selectBoardList(searchType, searchKeyword, startRow, listLimit);
	}

	// 전체 게시물 목록 갯수 조회 요청을 위한 getBoardListCount()
	public int getBoardListCount(String searchType, String searchKeyword) {
		// BoardMapper - selectBoardListCount()
		return mapper.selectBoardListCount(searchType, searchKeyword);
	}
	
	// 게시물 상세 정보 요청을 위한 getBoard()
//	public BoardVO getBoard(int board_num) {
//		// BoardMapper - selectBoard()
//		return mapper.selectBoard(board_num);
//	}
	
	// 게시물 상세 정보 요청을 위한 getBoard() - 조회수 증가 작업 추가
	public BoardVO getBoard(int board_num, boolean isIncreaseReadcount) {
		// BoardMapper - selectBoard() 메서드 호출하여 게시물 상세 정보 조회 요청
		BoardVO board = mapper.selectBoard(board_num);
		
		// 조회 결과가 존재하고 조회수 증가를 수행해야 할 경우
		// BoardMapper - updateReadCount() 메서드 호출하여 해당 게시물의 조회수 증가
		// => 단, 조회수가 증가된 게시물의 변경된 조회수 값을 BoardVO 객체에 반영하기 위해
		//    조회가 완료된 BoardVO 객체를 파라미터로 다시 전달(글번호도 포함되어 있음)
		if(isIncreaseReadcount && board != null) {
			mapper.updateReadCount(board);
		}
		
		// 조회 결과 리턴
		return board;
	}

	// 게시물 삭제 요청을 수행하는 removeBoard()
	public int removeBoard(int board_num) {
		// BoardMapper - deleteBoard() 메서드 호출하여 게시물 삭제 요청
		return mapper.deleteBoard(board_num);
	}

	// 게시물 수정 요청을 수행하는 modifyBoard()
	public int modifyBoard(BoardVO board) {
		// BoardMapper - updateBoard() 메서드 호출하여 게시물 
		return mapper.updateBoard(board);
	}
}
