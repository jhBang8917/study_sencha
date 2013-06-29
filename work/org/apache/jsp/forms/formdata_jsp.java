package org.apache.jsp.forms;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class formdata_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');

request.setCharacterEncoding("UTF-8");
String name = request.getParameter("name");
String birth = request.getParameter("birthday");
String mili = request.getParameter("mili");
String career = request.getParameter("career");
String gender = request.getParameter("gender");
String age = request.getParameter("age");
String email = request.getParameter("email");
String url = request.getParameter("url");
String pay = request.getParameter("pay");
System.out.println(name + " " + birth + " " + mili + " " + 
career + " "+ gender + " "+age+" "+email+ " "+url+ " "+pay );
if((name != null && name.length() > 0) && (birth != null && birth.length() > 0) && 
 (mili != null && mili.length() > 0) && (career != null && career.length() > 0) && 
 (email != null && email.length() > 0) && (url != null && url.length() > 0)){

      out.write("\r\n");
      out.write("{\"success\":\"정상적으로 처리 되었습니다.\"}\r\n");
}else{ 
      out.write("\r\n");
      out.write("{\"failure\":\"다시 입력해주세요.\"}\r\n");
}
      out.write('\r');
      out.write('\n');
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else log(t.getMessage(), t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
