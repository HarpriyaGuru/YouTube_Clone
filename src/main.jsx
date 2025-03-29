import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Video from './Pages/Video/Video.jsx'
import Channel from './Pages/Channel/Channel.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/watch/:id",
    element:<Video />
  },
  {
    path:"/channel",
    element:<Channel />
  }
]);
createRoot(document.getElementById('root')).render(
<RouterProvider router={appRouter}/>
)
