import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from './context/taskContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider>
    <App />
  </Provider>
  
);