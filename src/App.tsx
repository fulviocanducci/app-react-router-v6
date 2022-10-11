import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';

import Navigation from './components/Navigation';
import SuspenseSystem from './components/SuspenseSystem';

const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notfound'));
const Todo = lazy(() => import('./pages/todo'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="container-fluid h-100">
          <Routes>
            <Route
              index
              element={
                <SuspenseSystem>
                  <Home />
                </SuspenseSystem>
              }
            />
            ;
            <Route
              path="todo"
              element={
                <SuspenseSystem>
                  <Todo />
                </SuspenseSystem>
              }
            />
            <Route
              path="*"
              element={
                <SuspenseSystem>
                  <NotFound />
                </SuspenseSystem>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
