import Header from './components/Header';
import { UserContextProvider } from './components/userContext';
import Auth from './components/Auth';

function App() {
  return (
    <div>
        <UserContextProvider>
         <Header/>
         <Auth/>
        </UserContextProvider>
    </div>
  );
}

export default App;
