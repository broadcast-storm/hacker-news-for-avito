import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import OpenedNewsPage from './pages/OpenedNewsPage';

export default function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-100 py-32">
        <div className="containter mx-auto px-2 md:px-20">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <MainPage />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/:id`}>
              <OpenedNewsPage />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}
