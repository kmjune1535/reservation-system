package kr.or.connect.reservation.admin.dao;

public class CategorySqls {

	final static String SELLECT_ALL = "SELECT * FROM CATEGORY";
	final static String DELETE_BY_ID = "DELETE FROM CATEGORY WHERE id = :id";
	final static String UPDATE_BY_ID = "UPDATE CATEGORY SET NAME = :name where ID = :id";
}
