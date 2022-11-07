import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Routes/Routes';

function App() {


  return (
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
