import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Log-in'
import { Layout } from './layout'
import { Dashboard } from "./pages/Dashboard"

import { Team } from "./pages/Team"
import { Invoices } from "./pages/Invoices"
import { Contacts } from "./pages/Contacts"
import { Bar } from "./pages/Bar-chart"
import { Form } from "./pages/Form"
import { Line } from "./pages/Line-chart"
import { Pie } from "./pages/Pie-chart"
import { FAQ } from "./pages/Faq"
import { Calendar } from "./pages/Calendar"
import { Geography } from "./pages/Geography-chart"


function App() {
  return (
    <div className="app">

      <BrowserRouter>

        <Routes>

          <Route path='/Login' element={<Login />}></Route>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
