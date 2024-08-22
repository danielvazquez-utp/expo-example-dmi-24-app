import { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Button, TouchableOpacity, Pressable } from "react-native";

const index = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={ styles.mainContainer }>
            <Text style={ styles.counter }>{ counter }</Text>
            <Text style={ styles.title }> Usando el componente Button</Text>
            <View style={ styles.btnGroup } >
                <Button 
                    title="+1"
                    onPress={ () => setCounter( counter + 1 ) }
                />
                <Button
                    title="-1"
                    onPress={ () => setCounter( counter - 1 ) }
                />
                <Button
                    title="Reset"
                    onPress={ () => setCounter( 0) }
                />
            </View>
            <Text style={ styles.title }> Usando el componente TouchableOpacity</Text>
            <View style={ styles.btnGroup }>
                <TouchableOpacity 
                    style={[styles.touchable, styles.touchable_color]}
                    onPress={ () => setCounter( counter + 1 ) }
                >
                    <Text style={ styles.touchable_txt }>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.touchable, styles.touchable_color]}
                    onPress={ () => setCounter( counter - 1 ) }
                >
                    <Text style={ styles.touchable_txt }>-1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.touchable, styles.touchable_color]}
                    onPress={ () => setCounter( 0 ) }
                >
                    <Text style={ styles.touchable_txt }>Reset</Text>
                </TouchableOpacity>
            </View>
            <Text style={ styles.title }> Usando el componente Pressable</Text>
            <View style={ styles.btnGroup }>
                <Pressable 
                    style={ [styles.touchable, styles.pressable_color] }
                    onPress={ () => setCounter( counter + 1 ) }
                >
                    <Text style={ styles.touchable_txt }>+1</Text>
                </Pressable>
                <Pressable 
                    style={ [styles.touchable, styles.pressable_color] }
                    onPress={ () => setCounter( counter - 1 ) }
                >
                    <Text style={ styles.touchable_txt }>-1</Text>
                </Pressable>
                <Pressable 
                    style={ [styles.touchable, styles.pressable_color] }
                    onPress={ () => setCounter( 0 ) }
                >
                    <Text style={ styles.touchable_txt }>Reset</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default index;

 const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: 150,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    touchable : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    touchable_txt : {
        fontSize: 30,
    },
    touchable_color: {
        backgroundColor: "lightskyblue",
    },
    pressable_color: {
        backgroundColor: "steelblue",
    },
    title: { 
        marginVertical: 10, 
        borderTopWidth:1, 
        borderColor: 'gray', 
        width: '90%', 
        textAlign: 'center' ,
        paddingTop: 5,
        fontSize: 18,
        marginHorizontal: 5
    },
 })