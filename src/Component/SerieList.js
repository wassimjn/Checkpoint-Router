import SerieCard from "./SerieCard"
import '../App.css';

function SeriesList({seriedata, search, rating, setSeriedata}){
   
    return( 
        <div className='container'>
            {seriedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>=rating) ).map((el,i)=><SerieCard el={el} key={el.id} setSeriedata={setSeriedata} seriedata={seriedata}  /> )}
            {(seriedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>rating) ).length<=0) &&   
            <img
            className="Not"
                 src="https://media.istockphoto.com/vectors/-vector-id1141546305"
                     alt="First slide"
                    />}
        </div>


    )
}

export default SeriesList