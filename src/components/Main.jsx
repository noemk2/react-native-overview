import { React } from "react";
// import { Text, View } from "react-native";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch } from 'react-router-native'

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
        <Text>Working on it</Text>
      </Route>
      <Redirect to='/' />
    </Switch>

  </View>
);

export default Main;
