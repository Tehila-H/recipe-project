using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Project.Controllers
{
  [EnableCors(origins: "*", methods: "*", headers: "*")]
  public class User2Controller : ApiController
  {
    [HttpPost]
    public IHttpActionResult CheckUser(User r)
    {
      User g = DB.UserList.FirstOrDefault(p => p.Name.Equals(r.Name));
      if (g == null)
        return Ok(-1);//לא מצא בכלל משתמש עם השם הזה וזה אומר שצריך לעבור לקומפוננטת הרשמה
      g = DB.UserList.FirstOrDefault(p => p.Name.Equals(r.Name) && p.Password != r.Password);
      if (g != null)
        return Ok(1);//מחזיר תשובה אם מצא משיהו עם שם תואם וסיסמה לא תואמת
      //ואז להדפיס לו הודעה מתאימה שהסיסמה שגויה
      g = DB.UserList.FirstOrDefault(p => p.Name.Equals(r.Name) && p.Password == r.Password);
        return Ok(g);//להעביר לקומפוננ.. כל המתכונים
    }
  }
}
