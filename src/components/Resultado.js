import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Resultado({ dados }) {
    return (
        <View style={styles.resultadoContainer}>
            <View style={styles.barra} />
            <View style={styles.resultadoBox}>
                <Text style={styles.texto}>Produto: {dados.produto}</Text>
                <Text style={styles.texto}>Valor Original: R$ {dados.valorOriginal}</Text>
                <Text style={styles.texto}>Aumento: {dados.percentual}%</Text>
                <Text style={styles.texto}>Valor do Aumento: R$ {dados.aumento}</Text>
                <Text style={styles.texto}>Novo Valor: R$ {dados.novoValor}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    resultadoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    barra: {
        width: 5,
        height: '100%',
        backgroundColor: '#0004FFFF',
        marginRight: 10,
        borderRadius: 3,
    },
    resultadoBox: {
        flex: 1,
        backgroundColor: '#4586FFFF',
        padding: 15,
        borderRadius: 10,
    },
    texto: {
        fontSize: 18,
        color: '#EEEEEE',
        marginBottom: 5,
    },
});