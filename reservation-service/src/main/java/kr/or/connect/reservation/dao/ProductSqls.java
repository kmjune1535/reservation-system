package kr.or.connect.reservation.dao;

public class ProductSqls {

	final static String SELLECT_ALL = "SELECT p.id, p.name, p.description, d.place_name "
			 						+ "FROM product p, display_info d "
			 						+ "WHERE p.id = d.product_id order by p.id";
	
	final static String SELLECT_BY_CATEGORY_ID = "SELECT p.id, p.name, p.description, d.place_name "
									+ "FROM product p, display_info d "
									+ "WHERE p.id = d.product_id and category_id = :categoryId order by p.id";
			
}
