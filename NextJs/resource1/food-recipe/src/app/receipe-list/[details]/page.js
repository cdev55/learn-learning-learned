import RecipeDetailsItem from "@/components/ui/receipe-details"

const fetchData=async(id)=>{
   const data=await fetch(`https://api.sampleapis.com/recipes/recipes/${id}`);
   return data.json()

}
export default async function ReceipeDetails({params}){
    const id=await params.details;
    const receipe=await fetchData(id);
    console.log(id)
    return(
        <RecipeDetailsItem getRecipeDetails={receipe}/>
    )
}