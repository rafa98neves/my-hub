// React
import * as React from 'react';

// Components
import Layout from '../pages/layout/layout';

// Types
import { IChildren } from '../types/layout';

const Hub = React.lazy(() => import('hub/Module'));

export default function App() {

  const childrens: IChildren[] = [
    { name: 'MyHub', key: '', component: <Hub /> },
  ]

  return (
    <Layout childrens={childrens} />
  );
}