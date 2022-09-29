// import { Provider } from 'react-redux';
import './App.css';
// import { Home } from './pages/home/home';
// import store from './store';
// import { Page } from './pages/home/page.tsx';
import { Routes,Route,Link,Outlet } from 'react-router-dom';
import NavRouterContent from './routes/NavRouterContent';
import routes from "./routes/routes"

function App() {
  return (
    // <Provider store={store}>
    //   <div>
    //     <Home />
    //   {/* <Page id="1"/> */}
    //   </div>
    // </Provider>
    <div className='container'>
      <div className='tab'>
        {routes.map(item=>{
          return <Link className='selected' to={item.path}>{item.name}</Link>
        })}
        
      </div>
      <div className='contentContainer'>
        <NavRouterContent routeData={routes} defaultRouteIndex={0}/>
      </div>
    </div>
  );
}

export default App;
