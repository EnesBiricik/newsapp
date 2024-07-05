import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import RootLayout from './components/layout/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';
import NewsPage from './pages/NewsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path:"/", element:<HomePage />},
      {path:"/DetailPage/:title", element:<DetailPage/>},
      {path:"/ErrorPage", element:<ErrorPage />},
      {path:"/ContactPage", element:<ContactPage />},
      {path:"/CategoriesPage", element:<CategoriesPage />},
      {path:"/NewsPage/:section", element:<NewsPage />}
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
