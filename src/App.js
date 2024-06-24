
import Header from './components/Header'
import './App.css';
import First from './page/First';
import Second from './page/Second';
import Third from './page/Third';
function App() {
  return (
    <div className="bg-blue-200  space-y-8 h-full" >
      <Header />
      <First />
      <Second />
      {/* <Third /> */}
      
    
    </div>
  );
}

export default App;
