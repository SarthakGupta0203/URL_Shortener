
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/app-layout';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import RedirectLink from './pages/redirect-link';
import LinkPage from './pages/link';
import UrlProvider from './context';
import RequireAuth from './components/require-auth';


const router = createBrowserRouter([
  {
     element:<AppLayout />,
     children:[
      {
        path:'/',
        element:<LandingPage/>,
      },
      {
        path:'/dashboard',
        element:(
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        )
      },
      {
        path:'/auth',
        element:<Auth/>,
      },
      {
        path:'/link/:id',
        element:(
           <RequireAuth><LinkPage/></RequireAuth>
        )
      },
      {
        path:'/:id',
        element:<RedirectLink/>,
      }
     ]
  }
])

function App() {
  return ( 
  <UrlProvider>
  <RouterProvider router={router}/>
  </UrlProvider>
  );
}

export default App;
