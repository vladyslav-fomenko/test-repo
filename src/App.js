import './App.css';
const dynamicImport = () => import('./showDynamicLog')

 function App() {
    dynamicImport().then(imp => {
        imp.default()
    })
  return (
    <div className="App">
      <p>App.js</p>
        <p>new change</p>
    </div>
  );
}

export default App;
