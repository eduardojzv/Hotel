import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { BrowserRouterAndComponents} from './helpers/path&Component'
function App() {
  const router = createBrowserRouter(BrowserRouterAndComponents());
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
