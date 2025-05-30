// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Video from './Pages/Video/Video.jsx'
import Channel from './Pages/Channel/Channel.jsx'
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'

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
    path:"/user/:id",
    element:<Channel />
  },
  {
    path:"/:id/upload",
    element:<VideoUpload />
  },
  {
    path:"/signup",
    element:<SignUp />
  }
]);
createRoot(document.getElementById('root')).render(
<RouterProvider router={appRouter}/>
)
