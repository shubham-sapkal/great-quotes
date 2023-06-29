import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';

function App() {
  return (
    
    <Layout >
      <Switch>

        <Route path='/' exact >
          <Redirect to='/quotes' />
        </Route>

        <Route path='/quotes' exact>
            <AllQuotes />
        </Route>

        <Route path='/quotes/:quoteId'>
            <QuoteDetails />
        </Route>
    
        <Route path='/new-quote'>
            <NewQuote />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
