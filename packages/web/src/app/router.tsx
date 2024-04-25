import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/layouts/app'
import { HomePage } from '@/pages/home'
import { NotebookPage } from '@/pages/notebook'
import { TodoPage } from '@/pages/todo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'notebook',
        element: <NotebookPage />,
      },
      {
        path: 'todo',
        element: <TodoPage />,
      },
    ],
  },
])