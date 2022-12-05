import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export const Password = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Card>
            <Card.Cover  source={require('../../../images/bg-screen.jpg')} />
            <Card.Title  title='Recuperar Senha' subtitle='Informe seu e-mail cadastrado' />
            <Card.Content>
                <View>
                    <TextInput 
                        label="E-mail de acesso"
                        mode="outlined"
                        placeholder='Ex: joão@gmail.com'
                        keyboardType='email-address'
                    />
                </View>
                <View>
                    <Button style={{marginBottom:10, marginTop:10}} mode='contained'>Recuperar Senha</Button>
                    <Button  onPress={()=>navigation.navigate('login')}>Voltar</Button>
                </View>
           </Card.Content>
        </Card>
    </ScrollView>
  )
}
