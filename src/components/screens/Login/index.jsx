import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export const Login = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Card>
            <Card.Cover  source={require('../../../images/bg-home.jpg')} />
            <Card.Title  title='Acessar Conta' subtitle='Informe seus dados' />
            <Card.Content>
                <View>
                    <TextInput style={{marginBottom:10}}
                        label="E-mail de acesso"
                        mode="outlined"
                        placeholder='Ex: joão@gmail.com'
                        keyboardType='email-address'
                        />
                </View>
                <View>
                    <TextInput style={{marginBottom:10}}
                        label="Senha de acesso"
                        mode="outlined"
                        placeholder='Sua senha cadastrada'
                        keyboardType='default'
                        secureTextEntry={true}
                        />
                </View>
                <View>
                    <Button style={{marginBottom:10}} mode='contained' >
                        Acessar Conta
                    </Button>
                    <Button style={{marginBottom:10}} mode='outlined' onPress={()=>navigation.navigate('register')}>
                       Crie sua conta
                    </Button>
                    <Button mode='outlined' onPress={()=>navigation.navigate('password')} >
                        Esqueci minha senha
                    </Button>
                </View>
            </Card.Content>
        </Card>
    </ScrollView>
  )
}
