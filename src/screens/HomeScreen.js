import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Resultado from '../components/Resultado';
import globalStyles from '../styles/globalStyles';
export default function HomeScreen() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [percentualAumento, setPercentualAumento] = useState('');
    const [resultado, setResultado] = useState(null);
    function calcular() {
        if (!nomeProduto || !valorOriginal || !percentualAumento) {
            alert('Preencha todos os campos!');
            return;
        }
        const valor = parseFloat(valorOriginal);
        const perc = parseFloat(percentualAumento);
        if (isNaN(valor) || isNaN(perc)) {
            alert('Digite números válidos!');
            return;
        }
        const aumento = (valor * perc) / 100;
        const novoValor = valor + aumento;
        setResultado({
            produto: nomeProduto,
            valorOriginal: valor.toFixed(2),
            percentual: perc.toFixed(2),
            aumento: aumento.toFixed(2),
            novoValor: novoValor.toFixed(2),
        });
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titulo}>Calculadora de Aumento</Text>
            <View style={globalStyles.inputContainer}>
                <View style={globalStyles.barra} />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Nome do Produto"
                    placeholderTextColor="#B0BEC5"
                    value={nomeProduto}
                    onChangeText={setNomeProduto}
                />
            </View>
            <View style={globalStyles.inputContainer}>
                <View style={globalStyles.barra} />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Valor Original"
                    placeholderTextColor="#B0BEC5"
                    keyboardType="numeric"
                    value={valorOriginal}
                    onChangeText={setValorOriginal}
                />
            </View>
            <View style={globalStyles.inputContainer}>
                <View style={globalStyles.barra} />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Percentual de Aumento (%)"
                    placeholderTextColor="#B0BEC5"
                    keyboardType="numeric"
                    value={percentualAumento}
                    onChangeText={setPercentualAumento}
                />
            </View>
            <View style={globalStyles.botaoContainer}>
                <View style={globalStyles.barra} />
                <TouchableOpacity style={globalStyles.botao} onPress={calcular}>
                    <Text style={globalStyles.botaoTexto}>Calcular</Text>
                </TouchableOpacity>
            </View>
            {resultado && <Resultado dados={resultado} />}
        </View>
    );
}