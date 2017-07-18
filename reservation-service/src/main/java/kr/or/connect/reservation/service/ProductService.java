package kr.or.connect.reservation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.or.connect.reservation.dao.ProductDAO;
import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDTO;

@Service
public class ProductService {

	@Autowired
	private ProductDAO dao;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> selectProductsAll(){
		return dao.selectProductsAll();
	}

	public List<ProductDTO> selectProductById(int categoryId) {
		return dao.selectProductById(categoryId);
	}
}
