import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Login from './login';
import data from './user.json'
import ResponsiveAppBar from './HOC';
import Home from './home';
import ViewTransaction from './viewTransaction';
import NewTransaction from './newTransaction';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
     path: "/",
     element: <Login data={data}/>,
  },
  {
     path: "/home",
     element: <ResponsiveAppBar Child={<Home/>} data={data}/>
   },
   {
    path: "/view_transaction",
    element: <ResponsiveAppBar Child={<ViewTransaction/> }data={data}/>
   },
   {
    path: "/new_transaction",
    element: <ResponsiveAppBar Child={<NewTransaction data={data}/> }data={data}/>
   }
 ]);
root.render(
  <React.StrictMode>
    <App />
      <RouterProvider router={router}/>
  </React.StrictMode>
);
