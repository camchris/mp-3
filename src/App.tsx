import './App.css'
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom'
import Header from "./components/header";
import Nav from './components/nav';
import Footer from './components/footer';
import Education from "./components/education";
import Employment from './components/employment';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Credits from './components/credits';
import Home from './components/home';
import {styled} from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0;
  }
`

const Root = () => {
  return (
    <div>
      <Header/>
      <StyledDiv>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/employment" element={<Employment/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/credits" element={<Credits/>}/>
        </Routes>
      </StyledDiv>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}