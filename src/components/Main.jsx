import { React } from "react";
// import { Text, View } from "react-native";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar"


const Main = () => (
    <View style={{
        flex : 1
    }}>
        {/* <Text >
            Rate repository Application
        </Text> */}

          <AppBar/>

        <RepositoryList />

    </View>
);


export default Main;
