package kr.or.connect.reservation.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.connect.reservation.admin.dao.CategoryDAO;
import kr.or.connect.reservation.admin.domain.Category;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryDAO dao;

	public List<Category> selectAll() {
		return dao.selectAll();
	}

	public Long insertCategory(Category category) {
		return dao.insertCategory(category);
	}

	public void deleteCategory(int id) {
		dao.deleteCategory(id);
	}

	public void updateCategory(int id, Category category) {
		category.setId(id);
		
		dao.updateCategory(category);
	}

}
