package kr.mp.dwg.cmmn.util;

import javax.servlet.ServletContext;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class WebApplicationContextUtil extends WebApplicationContextUtils {
	private static WebApplicationContext wac;
	private static ServletContext servletContext;
	
	public static void setServletContext(ServletContext servletContext) {
		WebApplicationContextUtil.servletContext = servletContext;	
	}
	
	public static WebApplicationContext getRequiredWebApplicationContext() {
		wac = WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext);
		return wac;
	}

}
