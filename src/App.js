import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { NavList, StyledItem, StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <NavList>
                <StyledItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledItem>
                <StyledItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </StyledItem>
            </NavList>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>

    </HashRouter>
);