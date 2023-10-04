import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';
import {Home} from './pages/Home';
import About from './pages/About';
import Price from './pages/Price';
import Contact from './pages/Contact';
import Login from './pages/Login';
import RootLayouts from './layouts/RootLayouts';
import Signin from './layouts/Signin';
import NotFound from './pages/NotFound';

import Student, { studentRegister } from './pages/signin/Student';
import Lecturer, { lecturerRegister } from './pages/signin/Lecturer';
import Register_Institution, { institutionRegister } from './pages/Register_Institution';
import CheckOut_Paystack from './pages/CheckOut_Paystack'
import InstitutionMain from './pages/institution/InstitutionMain'

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayouts />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='price' element={<Price />}/>
              <Route path='paystack-check-out' element={<CheckOut_Paystack/>}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register-institution' element={<Register_Institution/>} action={institutionRegister} />
            <Route path='institution-page' element={<InstitutionMain />}/>         
          <Route path='signin' element={<Signin />}/>
          <Route path='student' element={< Student/>} action={studentRegister}/>
          <Route path='lecturer' element={< Lecturer/>} action={lecturerRegister}/>

          <Route path='*' element={<NotFound />} />
        </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
