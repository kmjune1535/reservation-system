package kr.or.connect.reservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {

	@GetMapping
	public String main() {
		return "mainpage";
	}
	
	@GetMapping("/myreservation")
	public String myReservation() {
		return "myreservation";
	}

	@GetMapping("/detail/{productId}")
	public ModelAndView detail(@PathVariable int productId) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("productId", productId);
		mav.setViewName("detail");
		return mav;
	}
	
	@GetMapping("/review")
	public String review() {
		return "review";
	}
	
}
