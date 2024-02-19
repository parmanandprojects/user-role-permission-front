import logo from './logo.svg';
import './App.css';
import Dashboard from './components/admin/dashboard/Dashboard';
import PublicRoutes from './routes/PublicRoutes';
import MyToastContainer from './components/common/MyToastContainer';

function App() {
  return (
    <>
    {/* <h1>App compo</h1> */}
    {/* <Dashboard/> */}
    <PublicRoutes/>
    <MyToastContainer/>
    
    </>
  );
}

export default App;
