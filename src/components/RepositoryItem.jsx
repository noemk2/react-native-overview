import { StyleSheet, View, Text } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepocitoryStats";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    // strong: {
    //     color: '#09f',
    //     fontWeight: "",
    //     marginBottom: 7
    // }
    language: {
        padding: 4,
        color: theme.colors.white
    }
})



const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>

            <StyledText fontSize='subheading' fontWeight='bold'>
                {props.fullName}
            </StyledText>

            <StyledText >
                {props.description}
            </StyledText>

            <StyledText style={styles.language} >
                {props.language}
            </StyledText>

            <RepositoryStats {...props} />


        </View>
    )
}


export default RepositoryItem 