import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import QuoteForm from './scenes/QuoteForm';
import QuoteResult from './scenes/QuoteResult';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container component="main" maxWidth="md">
            <QuoteForm />
          </Container>
        </Route>
        <Route
          exact
          path="/QuoteResult"
          render={(props) => (
            <Container component="main" maxWidth="md">
              <QuoteResult {...props} />
            </Container>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
