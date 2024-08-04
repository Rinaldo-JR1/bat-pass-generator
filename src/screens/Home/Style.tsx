import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContaier: {
        flexDirection: "column",
        borderWidth: 2,
        borderColor: "#ffffff",
        justifyContent: "center",
        alignSelf: `center`,
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: `#4D4D4D`
    },
    inputTextContainer: {
        width: "80%",
        alignItems: `center`,
        flexDirection: `column`,
    }
});