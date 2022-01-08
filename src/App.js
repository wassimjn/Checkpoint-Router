
import './App.css';
import React, { useState } from "react";
import Rating from "./Component/Rating";
import NavBar from './Component/Navbar';
import Menu from './Component/Menu';
import SeriesList from './Component/SerieList';
import { Route, Routes } from 'react-router-dom';
import Add from './Component/Add';
import Contact from './Component/Contact';
import Login from './Component/Login'
import Footer from './Component/Footer';
import SerieDescription from './Component/SerieDescription';

var series=[
  {
    id: 0,
    title:"Game Of Thrones",
    posterUrl:"https://linstant-m.tn//uploads/4657.png",
    rate: 4.6,
    description:"Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
    trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ"
  },
  {
    id:1,
    title:"Blacklist",
    posterUrl:"https://fr.web.img6.acsta.net/pictures/20/10/23/18/01/4439444.jpg",
    rate:4,
    description:"Le fugitif Raymond Reddington se rend aux autorités et offre la liste de ses contacts, á la seule condition de parler á une jeune profiliste inexperimentée, Liz.",
    trailer:"https://www.youtube.com/embed/JGBIimq1I3A"
  },
  {
    id:2,
    title:"Mr Robot",
    posterUrl:"http://colibre.org/wp-content/uploads/2015/10/Mr.-Robot-Key-Art.jpg",
    rate:4.3,
    description:"Elliot Alderson est un jeune informaticien vivant à New York, qui travaille en tant qu'ingénieur en sécurité informatique pour Allsafe Security. Celui-ci luttant constamment contre un trouble d'anxiété sociale et de dépression.",
    trailer:"https://www.youtube.com/embed/N6HGuJC--rk"
  },
  {
    id:3,
    title:"Breaking Bad",
    posterUrl:"https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/18/12/11/3956503.jpg",
    rate:4.7,
    description:"Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour réunir de l'argent afin de subvenir aux besoins de sa famille, Walter met ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth.",
    trailer:"https://www.youtube.com/embed/1JLUn2DFW4w"
  },
  {
    id:4,
    title:"Elite",
    posterUrl:"https://fr.web.img2.acsta.net/pictures/21/05/24/17/52/1035233.jpg",
    rate:3.7,
    description:"Quand trois adolescents de la classe moyenne se retrouvent admis dans une prestigieuse école privée d'Espagne, les tensions entre eux et les élèves dégénèrent rapidement et se finissent en un meurtre.",
    trailer:"https://www.youtube.com/embed/QNwhAdrdwp0"
  },
  {
    id:5,
    title:"Peaky Blinders",
    posterUrl:"https://media.gqmagazine.fr/photos/5eea3b93caa5a09c5304ad89/3:4/w_1692,h_2256,c_limit/peaky%20blinders.jpg",
    rate:4.6,
    description:"Birmingham, en 1919. Un gang familial règne sur un quartier de la ville : les Peaky Blinders, ainsi nommés pour les lames de rasoir qu'ils cachent dans la visière de leur casquette.",
    trailer:"https://www.youtube.com/embed/zxRwTERrAeM"
  },
  {
    id:6,
    title:"Lucifer",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    rate:4.1, 
    description:"Lassé et mécontent de sa position de Seigneur des Enfers, Lucifer Morningstar démissionne et abandonne son royaume pour la bouillonnante Los Angeles. Dans la Cité des Anges, l'ex maître diabolique est le patron d'un nightclub baptisé Lux.",
    trailer:"https://www.youtube.com/embed/X4bF_quwNtw"
  },
  {
    id:7,
    title:"How To Get Away With Murder",
    posterUrl:"https://fr.web.img6.acsta.net/pictures/18/09/17/10/16/5538373.jpg",
    rate:4.3,
    description:"Annalise Keating est une professeur de droit et avocate à la tête de son propre cabinet à Philadelphie. Chaque année, certains de ses étudiants ont le privilège de travailler dans son cabinet, mais un jour, tout dérape.",
    trailer:"https://www.youtube.com/embed/dkb-aBaxkVk"
  },
  {
    id:8,
    title:"Friends",
    posterUrl:"https://fr.web.img2.acsta.net/pictures/18/11/13/14/05/2764761.jpg",
    rate:4.4,
    description:"Les péripéties de trois jeunes femmes et trois jeunes hommes new-yorkais liés par une profonde amitié. Entre amour, travail, famille, ils partagent leurs bonheurs et leurs soucis au Central Perk, leur café favori.",
    trailer:"https://www.youtube.com/embed/hDNNmeeJs1Q"
  },
  {
    id:9,
    title:"The Witcher",
    posterUrl:"https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg",
    rate:4.1,
    description:"Hexer Geralt reprend la mission inachevée d'un autre sorceleur dans un royaume traqué par une bête féroce. Yennefer se forge un avenir magique au prix d'un terrible sacrifice.",
    trailer:"https://www.youtube.com/embed/ndl1W4ltcmg"
  },
  {
    id:10,
    title:"Squid Game",
    posterUrl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbllVWxmzkxH1PCsHM9OCm_FnuP9KmQtAB3oajQGxgHJTBV-o8",
    rate:4,
    description:"Des personnes en difficultés financières sont invitées à une mystérieuse compétition de survie. Participant à une série de jeux traditionnels pour enfants, mais avec des rebondissements mortels, elles risquent leur vie pour une grosse somme d'argent.",
    trailer:"https://www.youtube.com/embed/oqxAJKy0ii4"
  },
  {
    id:11,
    title:"Dark",
    posterUrl:"https://www.plurielle.ma/wp-content/uploads/2020/07/dark.png",
    rate:4.5,
    description:"Lorsque deux enfants disparaissent dans une petite ville allemande, son passé tragique refait surface. Quatre familles à la recherche des enfants vont voir leur routine bouleversée et les secrets de chacun vont être mis en lumière.",
    trailer:"https://www.youtube.com/embed/ESEUoa-mz2c"
  }
]
function App() {
  const [seriedata,setSeriedata]=useState(series)
  const [rating,setRating]=useState('')
  const [search,setSearch]=useState('')

  return (
    <div className="App bg">
       <Menu/>
         <Routes>
       <Route exact path={'/'} render={()=>
      
      <>
            <div className='partie1'>
      <h1>Show series</h1>
      
      <Add seriedata={seriedata}    setSeriedata={setSeriedata}  />
      </div>
      <div className='partie2'>
      <NavBar search={search} setSearch={setSearch} />
      <Rating rating={rating} setRating={setRating}/>
      </div>
      
      <SeriesList seriedata={seriedata} setSeriedata={setSeriedata} search={search} rating={rating}/>
      </>
      }></Route>
    <Route exact path={'/Home'} element={
      
      <>
            <div className='partie1'>
      <h1>Show Series</h1>
      
      <Add seriedata={seriedata}    setSeriedata={setSeriedata}  />
      </div>
      <div className='partie2'>
      <NavBar search={search} setSearch={setSearch} />
      <Rating rating={rating} setRating={setRating}/>
      </div>
      
      <SeriesList seriedata={seriedata} setSeriedata={setSeriedata} search={search} rating={rating}/>
      </>
      }></Route>
      <Route path={"Contact"} element={<Contact/>}></Route>
      <Route path={"Login"} element={<Login/>}></Route>
      <Route path='/SerieDescription/:id' element={<SerieDescription  series={series}  /> } />
      
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
