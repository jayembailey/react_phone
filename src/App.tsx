import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'





function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          { routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
              />
            ))}
        </Routes>
    </BrowserRouter>
  )
}

export default App
