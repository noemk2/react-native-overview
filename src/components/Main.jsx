import { React } from "react";
// import { Text, View } from "react-native";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch } from 'react-router-native'
import LogInPage from "../pages/Login";

const Main = () => (
  <View
    style={{
      flex: 1,
    }}
  >
    <AppBar />
    <Switch>
      <Route path='/' exact>
        <RepositoryList />
      </Route>
      <Route path='/sigin' exact >
        <LogInPage />
      </Route>
      <Redirect to='/' />
    </Switch>

  </View>
);

export default Main;
