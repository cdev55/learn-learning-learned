import ReceipeList from "@/components/ui/receipe-list";
const fetchReceipeList=async()=>{
 try {
   const data=await fetch('https://api.sampleapis.com/recipes/recipes');

   return data.json();
 } catch (error) {
  console.log("Error while fetching recepies",error);
 }
}

export default async function Recipe(){
  const receipiList=await fetchReceipeList();
  return(
    <div>
        <ReceipeList receipes={receipiList} />
    </div>
  )
}
