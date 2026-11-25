import { Route, Routes } from 'react-router-dom'
import { TelaInicial, TelaPrincipal, Final } from '../pages'
import { PageTransition } from '../layouts/PageTransition'


export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageTransition>
            <TelaInicial />
          </PageTransition>
        }
      />
      <Route
        path="/telaprincipal"
        element={
          <PageTransition>
            <TelaPrincipal />
          </PageTransition>
        }
      />
      <Route
        path="/final"
        element={
          <PageTransition>
            <Final />
          </PageTransition>
        }
      />
    </Routes>
  )
}