using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Models
{
  public class Recipe
  {
    public int IdRp { get; set; }
    public string NameRp { get; set; }
    public string CodeCat { get; set; }
    public int PreparationTime { get; set; }//זמן הכנה
    public int LevelOfDifficulty { get; set; }//דרגת קושי
    public DateTime AddDate { get; set; }
    public List<string> IngredientsList { get; set; }//לבדוק איך עושים ליסט באנגולר
    public List<string> Preparation { get; set; }//אופן ההכנה
    public int UserId { get; set; }
    public bool IsDisplay { get; set; }
    public string ImgRoute { get; set; }


  }
}
