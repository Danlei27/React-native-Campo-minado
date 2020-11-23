import React  from 'react'
import {Text, View, StyleSheet} from 'react-native'
import params from '../params'
export default props => {
    const styleField = [styles.field]
    // outros estilos aqui!
    if (styleField.length === 1) styleField.push(styles.regular)

    return(
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor:'#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderBottomColor: '#333',
    }
})