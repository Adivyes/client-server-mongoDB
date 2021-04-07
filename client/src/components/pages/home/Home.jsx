import React ,{useState,useEffect}from 'react';
import CustomTableComponents from '../../table.component';
import getAllMovies from '../../service/Movies-service'

export default function Home(props) {
const [movies, setMovies] = useState([])
  
function getMovies(){
getAllMovies().then((res)=>{setMovies(res)})
};
useEffect(getMovies,[])
//  const movieColumns=["id","movie name","rating","created at","last update"]
const movieColumns=[

{
    name: "movieName", 
    label:"Movies Name" , 
    options:{
    filter:true,
    sort:true, 
    }

},
{

    name: "rating", 
    label:"rating" , 
    options:{
    filter:true,
    sort:true, 
    }
},
{

    name: "genre", 
    label:"created at" , 
    options:{
    filter:true,
    sort:true, 
    }
},
{

    name: "last update", 
    label:"last update" , 
    options:{
    filter:true,
    sort:true, 
    }
},

];

    return (
        <div>
            home
            <CustomTableComponents title="users all day"  data={movies} columns={movieColumns}/>
        </div>
)
}