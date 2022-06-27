import { View, StyleSheet } from "react-native";
// ViewPropTypes is decrepte
import StyledText from "./StyledText";
import Constans from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary, 
        paddingTop: Constans.statusBarHeight + 10 , 
        paddingBottom: 10,
        paddingLeft: 10
    } , 
    text: {
        color: theme.appBar.textPrimary
    }

})
const AppBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Repositories
            </ StyledText>

        </View>
    )
}

export default AppBar 