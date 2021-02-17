import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import StopwatchView from './view/StopwatchView/StopwatchView';
import CountdownView from './view/CountdownView/CountdownView';
import NotFoundView from './view/NotFoundView/NotFoundView';

function App() {
    return (
        <Container>
            <AppBar />

            {/* <Suspense fallback={<Loading />}> */}
            <Switch>
                <Route path="/stopwatch" exact>
                    <StopwatchView />
                </Route>

                <Route path="/countdown" exact>
                    <CountdownView />
                </Route>

                <Route>
                    <NotFoundView />
                </Route>
            </Switch>
            {/* </Suspense> */}

            {/* <ToastContainer autoClose={3000} /> */}
        </Container>
    );
}

export default App;
