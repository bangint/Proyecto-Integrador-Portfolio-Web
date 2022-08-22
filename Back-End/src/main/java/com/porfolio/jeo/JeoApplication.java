package com.porfolio.jeo;




import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class JeoApplication {
    

    public static void main(String[] args) {
        SpringApplication.run(JeoApplication.class, args);
    }
@Bean
   public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins(/*"https://portafolioweb-de08f.web.app/"*/"http://localhost:8080/").allowedHeaders("*").allowedMethods("*");
			}
		};
	}


}
