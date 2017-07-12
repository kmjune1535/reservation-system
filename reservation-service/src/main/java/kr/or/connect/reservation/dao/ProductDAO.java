package kr.or.connect.reservation.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDTO;

@Repository
public class ProductDAO {

	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<ProductDTO> rowMapper = BeanPropertyRowMapper.newInstance(ProductDTO.class);
	
	public ProductDAO(DataSource dataSource) {
		jdbc = new NamedParameterJdbcTemplate(dataSource);
	}
	
	public List<ProductDTO> selectProductsAll() {
		try {
			return jdbc.query(ProductSqls.SELLECT_ALL, rowMapper);
		}catch(EmptyResultDataAccessException e) {
			return null;
		}
	}

	public List<ProductDTO> selectProductById(int categoryId) {
		Map<String, Object> params = new HashMap<>();
		params.put("categoryId", categoryId);
		try {
			return jdbc.query(ProductSqls.SELLECT_BY_CATEGORY_ID,params,rowMapper);
		}catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
}
