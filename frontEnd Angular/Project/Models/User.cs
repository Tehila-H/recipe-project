using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Models
{
  public class User
  {
    public int UserId { get; set; }
    public string Name { get; set; }
    public string Adress { get; set; }
    public string Mail { get; set; }
    public string Password { get; set; }
  }
}
