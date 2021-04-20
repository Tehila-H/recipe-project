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
  public class CategoryController : ApiController
  {
    public IHttpActionResult GetAllCategory()
    {
      return Ok(DB.CategoryList);
    }
  }
}
