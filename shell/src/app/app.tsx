import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Hub = React.lazy(() => import('hub/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hub">Hub</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/hub" element={<Hub />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
