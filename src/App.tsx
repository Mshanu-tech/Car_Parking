import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OwnerRouter from './router/OwnerRouter'
import UserRouter from './router/UserRouter'
import AdminRouter from './router/AdminRouter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/*'} element={<UserRouter />} />
          <Route path={'/owner/*'} element={<OwnerRouter />} />
          <Route path={'/admin/*'} element={<AdminRouter/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
