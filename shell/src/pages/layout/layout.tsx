// React
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styles 
import './layout.scss';

// Types
import { IChildren } from '../../types/layout';
import Sidebar from '../../components/sidebar/sidebar';

export default function Layout(props: { childrens: IChildren[] }) {
  return (
    <section className="container">
      <Sidebar childrens={props.childrens} />

      <React.Suspense fallback={null}>
        <Routes>
          {props.childrens.map(child => {
            return <Route key={child.key} path={'/' + child.key} element={child.component} />
          })}
        </Routes>
      </React.Suspense>
    </section>
  );
}