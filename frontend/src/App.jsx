import './App.css'
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ComponentGrid1 from './Components/ComponentGrid1';
import ComponentGrid3 from './Components/ComponentGrid3';
import ComponentGrid2 from './Components/ComponentGrid2';

function App() {

  return (
    <main className='main-layout'>
      <ComponentGrid1/>
      <ComponentGrid2/>
      <ComponentGrid3/>
    </main>
  )
}

export default App
