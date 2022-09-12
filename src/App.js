import {  GlobalProvider } from './context/GlobalProvider';
import { Rutas } from './routes/Rutas';

function App() {
  return (
    <div className="App">
      <GlobalProvider>

        <Rutas/>
        
      </GlobalProvider>
    </div>
  );
}

export default App;
