const fetchData=async(id)=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data=response.json()
    return data;
}

const userDetails=async({params})=>{
const id=await params.detail;
const user=await fetchData(id);
return(
    <div>
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.website}</h1>
        <h1>{user?.company.name}</h1>
    </div>
)
}

export default userDetails;