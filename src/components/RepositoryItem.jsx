import { Image, StyleSheet, View, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepocitoryStats";
import theme from "../theme";


const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>

        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        </View>

        <View style={{ flex: 1 }}>

            <StyledText fontWeight='bold'>
                {props.fullName}
            </StyledText>

            <StyledText color='seondary'>
                {props.description}
            </StyledText>

            <StyledText style={styles.language} >
                {props.language}
            </StyledText>

        </View>
    </View>

)


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>

            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />


        </View>
    )
}

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
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        // marginTop: 4,
        // marginBottom: 4, 
        marginVertical: 4,
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})
export default RepositoryItem 