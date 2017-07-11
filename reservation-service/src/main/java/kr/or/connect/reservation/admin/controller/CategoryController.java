package kr.or.connect.reservation.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import kr.or.connect.reservation.admin.domain.Category;
import kr.or.connect.reservation.admin.service.CategoryService;

@Controller
@RequestMapping("/")
public class CategoryController {

	@Autowired
	private CategoryService service;
	
	@GetMapping
	public ModelAndView selectAll() {
		ModelAndView mav = new ModelAndView();
		List<Category> list = service.selectAll();
		
		mav.addObject("list", list);
		
		mav.setViewName("index");
		
		return mav;
	}
	
	@PostMapping("/categoryInsert")
	public String insertCategory(@ModelAttribute Category category) {
		Long result = service.insertCategory(category);
		
		return "redirect:/";
	}
	
}
