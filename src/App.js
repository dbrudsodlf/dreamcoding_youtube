import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter([{
  path:'/',
  element: <Root/>,
  errorElement:<NotFound/>,
  children:[
    {index:true,element:<Home/>},
    //{path:'videos',element:<Videos/>},
    //{path:'videos/:videoId',element:<VideoDetail/>}

  ]
},
// {
//     path:'/videos',
//     element: <Videos/>,
// }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;