package kr.or.connect.reservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import kr.or.connect.reservation.domain.Category;
import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDTO;
import kr.or.connect.reservation.service.CategoryService;
import kr.or.connect.reservation.service.ProductService;

@RestController
public class MainRestController {

	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/categories")
	public List<Category> selectCategories() {
		List<Category> categoryList = categoryService.selectCategoriesAll();
		
		return categoryList;
	}
	
	@GetMapping("/products")
	public List<ProductDTO> selectProducts() {
		List<ProductDTO> productList = productService.selectProductsAll();
		
		return productList;
	}
	
	@GetMapping("/products/{categoryId}")
	public List<ProductDTO> selectProductById(@PathVariable int categoryId) {
		List<ProductDTO> productList = productService.selectProductById(categoryId);
		
		return productList;
	}

}
