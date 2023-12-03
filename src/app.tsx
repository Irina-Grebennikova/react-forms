import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { PageLayout } from '@/layouts/page-layout';
import { MainPage } from '@/pages/main-page';
import { ReactHookForm } from '@/pages/react-hook-form';
import { UncontrolledForm } from '@/pages/uncontrolled-form';
import { store } from '@/store';

const routes = (
  <Route element={<PageLayout />}>
    <Route path="/" element={<MainPage />} />
    <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
    <Route path="/react-hook-form" element={<ReactHookForm />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

function App(): ReactElement {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export { App };
