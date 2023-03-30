import React, { lazy, Suspense, useEffect, useState } from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Spinner from './Components/Spinner'
function App() {
  const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
  const ThankYouPage = lazy(() => import('./pages/ThankYouPage'))

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/thankyou" element={<ThankYouPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
