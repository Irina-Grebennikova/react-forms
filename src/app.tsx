import { ReactElement } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { PageLayout } from '@/layouts/page-layout';
import { MainPage } from '@/pages/main-page';
import { ReactHookForm } from '@/pages/react-hook-form';
import { UncontrolledForm } from '@/pages/uncontrolled-form';

const routes = (
  <Route element={<PageLayout />}>
    <Route path="/" element={<MainPage />} />
    <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
    <Route path="/react-hook-form" element={<ReactHookForm />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export { App };
