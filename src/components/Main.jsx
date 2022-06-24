import { React } from "react";
import Constans from "expo-constants";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";


const Main = () => (
    <View style={{
        marginTop: Constans.statusBarHeight,
        flexGrow: 1
    }}>
        <Text >
            Rate repository Application
        </Text>

        <RepositoryList />

    </View>
);


export default Main;