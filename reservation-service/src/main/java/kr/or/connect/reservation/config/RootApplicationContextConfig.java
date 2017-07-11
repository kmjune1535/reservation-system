package kr.or.connect.reservation.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = {
     "kr.or.connect.reservation.admin.dao",
     "kr.or.connect.reservation.admin.service",
})
@Import({DbConfig.class})
public class RootApplicationContextConfig {

}
