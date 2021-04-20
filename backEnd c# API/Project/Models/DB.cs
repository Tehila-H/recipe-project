using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Models
{
  public class DB
  {
    public static List<User> UserList { get; set; }
    public static List<Category> CategoryList { get; set; }
    public static List<Recipe> RecipeList { get; set; }
 //   public List<string> LRecipe1 { get; set; }

    static DB()
    {
      UserList = new List<User>()
      {
        new User(){UserId=1, Name="David", Adress="harakafot", Mail="david12@gmail.com", Password="1234"},
        new User(){UserId=2, Name="Yair", Adress="narkisim", Mail="Yair1258@gmail.com", Password="5896"},
        new User(){UserId=3, Name="Meir", Adress="vradim", Mail="Meir58999@gmail.com", Password="7894"},
      };

      CategoryList = new List<Category>()
      {
        new Category(){Code="1", CategoryName="עוגות", RoutingToIcon=""},
        new Category(){Code="2", CategoryName="עוגיות", RoutingToIcon=""},
        new Category(){Code="3", CategoryName="קינוחים", RoutingToIcon=""},
        new Category(){Code="4", CategoryName="בריאות", RoutingToIcon=""},
      };

      RecipeList = new List<Recipe>()
      {
        new Recipe()
          {IdRp=10,
          NameRp="קרקרים עם פרג",
          CodeCat="4",
          PreparationTime=80,
          LevelOfDifficulty=1,
          AddDate=new DateTime(10/12/2010),
          IngredientsList=new List<string>()
          { "כוס וחצי קמח כוסמין",
            "חצי כפית מלח",
            "מעט פלפל שחור",
            "4 כפות שמן זית",
            "10 כפות מים קרים"},
          Preparation=new List<string>()
          { "מחממים מראש תנור ל180 מעלות",
            "מערבבים את כל החומרים בקערה, בעזרת כף, עד לקבלת בצק אחיד. את המים יש להוסיף בסוף ובהדרגה",
            "פורסים נייר אפיה ומרדדים עליו את הבצק למלבן דק  בעובי של כ-3 מ",
            "בעזרת גלגלת חיתוך או סכין חותכים את הבצק לריבועים בגודל של כ 4X4 סמ. מניחים את נייר האפיה עם הבצק בתוך תבנית התנור ואופים במשך 20-22 דקות, " +
            "עד שהקרקרים מזהיבים ומתקשים מעט.",
            "מוציאים מהתנור ומניחים לקרקרים להתקרר לגמרי"},
          UserId=1,
          IsDisplay=true,
          ImgRoute="./assets/idr10.png"},


          new Recipe()
          {IdRp=15,
          NameRp="חטיפי גרנולה",
          CodeCat="4",
          PreparationTime=100,
          LevelOfDifficulty=2,
          AddDate=new DateTime(28/10/2019),
          IngredientsList=new List<string>()
          { "80 גרם חמאה",
            "שליש כוס דבש",
            "כפית קינמון",
            "רבע כפית מלח",
            "2.5 כוסות קוואקר",
            "חצי כוס קוקוס",
            "חצי כוס חמוציות",
            "שני שליש כוס שקדים",
            "רבע כוס גרעיני דלעת"},
          Preparation=new List<string>()
          { "מחממים מראש תנור ל180 מעלות",
            "בסיר מחממים את החמאה, הדבש, הסוכר החום, הקינמון והמלח עד שהסוכר מתמוסס ומתקבלת  תערובת אחידה",
            "בקערה מערבבים את כל החומרים היבשים  – קוואקר, קוקוס, חמוציות, אגוזים וגרעיני דלעת",
            "כשהסוכר נמס והתערובת הרטובה חלקה יוצקים אותה על החומרים היבשים ומערבבים עד שכל היבשים יהיו מצופים בסירופ שנוצר.  יוצקים את התערובת לתבנית מרופדת בנייר אפיה",
            "משטחים את התערובת טוב טוב לשכבה אחידה על התבנית. הכי נוח לעשות זאת עם מרית.",
            "אופים במשך כ- 25-30 דקות עד שהחטיפים משחימים ומניחים להם להצטנן בתוך התבנית."},
          UserId=3,
          IsDisplay=true,
          ImgRoute="./assets/idr15.png"},


          new Recipe()
          {IdRp=12,
          NameRp="גלידת שוקולד",
          CodeCat="3",
          PreparationTime=30,
          LevelOfDifficulty=2,
          AddDate=new DateTime(05/12/2008),
          IngredientsList=new List<string>()
          { "250 מל חלב",
            "50 גרם אבקת סוכר",
            "2 חלמונים",
            "150 מל שמנת מתוקה",
            "100 גרם שוקולד מריר קצוץ"},
          Preparation=new List<string>()
          { "מוזגים לסיר חלב ומחממים מעל להבה בינונית עד לסף רתיחה.",
            "מעבירים סוכר וחלמונים לקערה וטורפים עד לקבלת תערובת תפוחה ובהירה.",
            "יוצקים בזרם איטי תוך כדי ערבוב מתמיד במטרפה את החלב החם אל תערובת החלמונים.",
            "מעבירים את הבלילה לסיר ומחממים מעל להבה בינונית תוך כדי ערבוב מתמיד במטרפה עד לקבלת קרם סמיך וחלק. נזהרים שלא להגיע לרתיחה על מנת הבלילה לא תיקרש.",
            "מסירים את הסיר מהכיריים, מוסיפים שוקולד ומערבבים עד שהשוקולד נמס פנימה ונטמע לחלוטין בבלילה.",
            "מעבירים את הבלילה למכונת Nemox ומפעילים עד לקבלת גלידה."},
          UserId=1,
          IsDisplay=true,
          ImgRoute="./assets/idr12.png"},


          new Recipe()
          {IdRp=9,
          NameRp="עוגת זברה",
          CodeCat="1",
          PreparationTime=50,
          LevelOfDifficulty=3,
          AddDate=new DateTime(08/01/2020),
          IngredientsList=new List<string>()
          { "4 ביצים",
            "כוס סוכר",
            "כוס חלב",
            "כפית תמצית וניל",
            "3 כוסות קמח",
            "2 כפיות אבקת אפיה",
            "רבע כפית מלח",
            "לבלילת השוקולד:",
            "3 כפות אבקת קקאו",
            "רבע כוס מים",
            "כף סוכר"},
          Preparation=new List<string>()
          { "משמנים תבנית עם מעט חמאה ונייר אפייה, בגודל 24 סמ עגולה. מחממים תנור ל 180 מעלות.",
            "להקציף בקערה גדולה את כל החומרים היבשים, אבקת אפיה,  מלח וקמח.",
            "בקערה אחרת מערבבים את אבקת הקקאו עם 1/4 כוס חלב ו1 כף סוכר.",
            "מערבבים חמאה עם סוכר עד לקבלת קרם. מוסיפים את הביצים אחת בכל פעם ומערבבים היטב עד לקבלת תערובת אחידה. מוסיפים תמצית וניל.",
            "במיקסר על נמוך, מוסיפים חלב בהדרגה ואת תערובת הקמח עד שכל משולב היטב.",
            "הוסיפו שתי כוסות של בלילת החמאה וערבבו אותם עם תערובת השוקולד.",
            "הוסיפו כף אחד לכל בלילה ליצור שכבות של בלילה על המחבת המוכנה. מתחילים מאמצע המחבת, לקחת כפית אחת של בלילה לבן ואז על זה להוסיף כף של בלילת שוקולד וחוזר חלילה עד שכל הבלילה נוצלה.",
            "אופים במשך 50-60 דקות עד שקיסם מוכנס לתוך העוגה במרכז יוצא נקי.",
            "מוציאים מהתנור ומצננים במשך 15 דקות על מדף קירור לפני ההסרה מהמחבת.",
            "מגישים כפי שהוא או עליון עם זיגוג שוקולד."},
          UserId=2,
          IsDisplay=true,
          ImgRoute="./assets/idr9.png"},


          new Recipe()
          {IdRp=7,
          NameRp=" עוגיות שוקולד ציפס",
          CodeCat="2",
          PreparationTime=35,
          LevelOfDifficulty=2,
          AddDate=new DateTime(15/01/2016),
          IngredientsList=new List<string>()
          { "שני שליש כוס שמן",
            "2 כוסות קמח",
            "כפית אבקת אפיה",
            "חצי כפית סודה לשתיה",
            "כוס שבבי שוקולד ציפס",
            "3/4 כוס סוכר חום",
            "רבע כוס סוכר לבן",
            "2 ביצים"},
          Preparation=new List<string>()
          { "את כל מצרכי העוגיות נלוש היטב בקערה עד לקבלת בצק עוגיות נוח.",
            "נרפד תבנית בנייר אפייה, ניצור מבצק העוגיות כדורים בגודל כדור פינג פינג ונסדר (עם רווחים) על התבנית.",
            "נאפה את העוגיות בתנור חם על 170 מעלות במשך כ רבע שעה, העוגיות מוכנות כשהן זהובות ויפות.",
            "לגיוון: ניתן לערבב שוקולד צ'יפס לבן ושחור ביחד."},
          UserId=2,
          IsDisplay=true,
          ImgRoute="./assets/idr7.png"},
      };
    }


  }
}
