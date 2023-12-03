import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Donation from './components/Donations/Donations';
import Statistics from './components/Statistics/Statistics';
import App from './components/App/App';
import DonationCardDetails from './components/DonationCardDetails/DonationCardDetails';
import { getStoredDonationId } from './components/utils/localStorage';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/donation",
          loader: () => fetch('/data.json')
          .then(res => res.json())
          .then(datas => 
            datas.filter((data)=> getStoredDonationId().includes(data.id))),
          element: <Donation></Donation>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/donate/:donationId",
          loader: ({ params }) =>
            fetch('/data.json')
              .then(res => res.json())
              .then(datas => datas.filter(data => data.id === parseInt(params.donationId))),
          element: <DonationCardDetails></DonationCardDetails>
        },]

    },

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
