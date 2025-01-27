// React
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styles 
import './layout.scss';

// Types
import { IChildren } from '../../types/layout';
import Sidebar from '../../components/sidebar/sidebar';
import Loader from '../../components/loader/loader';

export default function Layout(props: { childrens: IChildren[] }) {
  return (
    <section className="layout-container">
      <Sidebar childrens={props.childrens} />

      <React.Suspense fallback={<Loader />}>
        <Routes>
          {props.childrens.map(child => {
            return <Route key={child.key} path={'/' + child.key} element={child.component} />
          })}
        </Routes>
      </React.Suspense>
    </section>
  );
}