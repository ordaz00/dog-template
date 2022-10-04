import * as React from 'react';
import './App.css';
import Home from './pages/home';
import Breedings from "./pages/breedings.js"
import Contact from "./pages/contact.js"
import Faq from "./pages/faq.js"
import Females from "./pages/females.js"
import Productions from "./pages/productions.js"
import Puppies from "./pages/puppies.js"
import Studs from "./pages/studs"

export default function App(){
  let [page, changePage] = React.useState("main")
  
  function updatePage(newPage){
    changePage(newPage);
  }

  let dict = {"main": <Home updatePage = {updatePage}/>, "breedings": <Breedings updatePage = {updatePage} /> , "contact": <Contact updatePage = {updatePage}/>, "faq": <Faq updatePage = {updatePage}/>, "females": <Females updatePage = {updatePage}/>, "productions": <Productions updatePage = {updatePage}/>, "puppies": <Puppies updatePage = {updatePage}/>, "studs": <Studs updatePage = {updatePage}/>};
  let webPage = dict[page];

  return (
    <div>
      {webPage}
    </div>
  )
}
