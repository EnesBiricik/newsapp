import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import RootLayout from './components/layout/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path:"/", element:<HomePage />},
      {path:"/DetailPage/:title", element:<DetailPage/>},
      {path:"/ErrorPage", element:<ErrorPage />},
      {path:"/ContactPage", element:<ContactPage />}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
