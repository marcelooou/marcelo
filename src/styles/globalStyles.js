import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#1500FFFF',
        width: '100%',
        textAlign: 'left',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    barra: {
        width: 5,
        height: 50,
        backgroundColor: '#1500FFFF',
        marginRight: 10,
        borderRadius: 3,
    },
    input: {
        flex: 1,
        backgroundColor: '#393E46',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#00ADB5',
        padding: 15,
        fontSize: 18,
        color: '#EEEEEE',
    },
    botaoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    botao: {
        backgroundColor: '#00ADB5',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#222831',
        fontWeight: 'bold',
        fontSize: 20,
    },
});