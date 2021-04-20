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
  
  public class UserController : ApiController
  {
    [HttpGet]
    public IHttpActionResult GetAllUsers()
    {
      return Ok(DB.UserList);
    }

    //[HttpPost]
    //public IHttpActionResult CheckUser(User r)
    //{
    //  User u = DB.UserList.FirstOrDefault(p => p.Name.Equals(r.Name) && p.Password != r.Password);
    //  if (u != null)
    //    return Ok(u);
    //  return Ok("Error in a passsword"); 
    //}

    [HttpPost]
    public IHttpActionResult CheckUser(User rr)
    {
      User r = new User();
      User u = DB.UserList.FirstOrDefault(p => p.Name.Equals(r.Name) && p.Password != r.Password);
      if (u != null)
        return Ok(u);
      return Ok("Error in a passsword");
    }


    //[HttpPost]
    //public string CheckUser([FromBody]User r)
    //{
    //  User u = DB.UserList.FirstOrDefault(p => p.Name.Equals(r.Name) && p.Password != r.Password);
    //  if (u != null)
    //     Ok(u);
    //  return "Error in a passsword";
    //}

    [HttpPost]
    public IHttpActionResult AddUser([FromBody] User u)
    {
      User u2 = DB.UserList.FirstOrDefault(o => o.Name == u.Name && o.Password==u.Password);
      if (u2 != null)
        return Conflict();
      DB.UserList.Add(u);
      return Ok(u);
    }



  }
}
