import {Outlet, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IndexPage from "./components/IndexPage/IndexPage";
import Card from "./components/Card/Card";
import NonePage from "./components/NonePage/NonePage";
import Autorization from "./components/Authorization/Autorization";
import Reviews from "./components/Reviews/Reviews";
import InProgress from "./components/InProgress/InProgress";


function App() {

    return (
   <Routes>
         <Route path='/' element={<Layout/>}>
             <Route index element={<IndexPage/>}/>
             <Route path=':title' element={<Card/>}/>
             <Route path='/registration' element={<Autorization/>}/>
             <Route path='/reviews' element={<Reviews/>}/>
             <Route path='/inprogress' element={<InProgress/>}/>
             <Route path='*' element={<NonePage/>}/>
         </Route>
   </Routes>
  );
}

function Layout() {
    return(
        <>
            <Header/>
            <main className={'container'}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default App;

