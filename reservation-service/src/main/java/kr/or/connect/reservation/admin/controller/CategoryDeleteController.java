package kr.or.connect.reservation.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import kr.or.connect.reservation.admin.domain.Category;
import kr.or.connect.reservation.admin.service.CategoryService;

@RestController
public class CategoryDeleteController {

	@Autowired
	private CategoryService service;
	
	@DeleteMapping("/{id}")
	public void categoryDelete(@PathVariable int id) {
		service.deleteCategory(id);
	}
	
	@PutMapping("/{id}")
	public int categoryUpdate(@PathVariable int id, @RequestBody Category category) {
		service.updateCategory(id, category);
		return id;
	}
}
