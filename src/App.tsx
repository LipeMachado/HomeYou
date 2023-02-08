import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './Style/styledGlobal'
import MainRoutes from './router'

export function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <MainRoutes />
      </Router>
    </>
  )
}
