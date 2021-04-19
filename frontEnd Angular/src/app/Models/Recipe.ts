export class Recipe{
    constructor(
        public IdRp:number, 
        public NameRp:string, 
        public CodeCat:string, 
        public PreparationTime:number,
        public LevelOfDifficulty:number, 
        public AddDate:Date,
        public IngredientsList:string[], 
        public Preparation:string[], 
        public UserId:number,
        public IsDisplay:boolean, 
        public ImgRoute:string ){}

         
}