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
  public class RecipeController : ApiController
  {
    [HttpGet]
    public IHttpActionResult GetAllRecipes()
    {
      return Ok(DB.RecipeList);
    }

    [HttpPost]
    public Recipe CheckUser2([FromBody] Recipe str)
    {
      return str;
    }

    [HttpPost]
    public IHttpActionResult AddRecipe([FromBody] Recipe r)
    {
      Recipe r2 = DB.RecipeList.FirstOrDefault(o => o.NameRp == r.NameRp);
      if (r2 != null)
        return Conflict();//מחזיר שא"א להכניס כי כבר קיים
      DB.RecipeList.Add(r);
      return Ok(r);
    }

    [HttpPost]
    public IHttpActionResult SaveChanges([FromBody] Recipe r)
    {
      Recipe r2 = DB.RecipeList.FirstOrDefault(o => o.IdRp == r.IdRp);
      if (r2 == null)
        return Conflict();//ז"א שאין את המתכון
      else
      {
        DB.RecipeList.Remove(r2);
        DB.RecipeList.Add(r);
        return Ok(r);
      }
    }



  }
}
