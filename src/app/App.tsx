import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'shared/fonts/zaychik/Zaychik.css';

import { MainProviders } from "./providers";
import { AppRouter } from "./routers";
import './styles/global.css';

function App() {
  return (
    <MainProviders>
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </MainProviders>
  )
}

export default App
