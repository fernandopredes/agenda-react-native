import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export const Register = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Card>
            <Card.Cover  source={require('../../../images/bg-home.jpg')} />
            <Card.Title  title='Crie sua conta' subtitle='Informe seus dados' />
            <Card.Content>
                <View>
                    <TextInput style={{marginBottom:10}}
                        label="Informe seu nome"
                        mode="outlined"
                        placeholder='Ex: Carlos Eduardo'
                        keyboardType='default'
                        />
                </View>
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
                    <TextInput style={{marginBottom:10}}
                        label="Confirmar senha"
                        mode="outlined"
                        placeholder='Sua senha cadastrada'
                        keyboardType='default'
                        secureTextEntry={true}
                        />
                </View>
                <View>
                    <Button style={{marginBottom:10}} mode='contained' >
                        Realizar Cadastro
                    </Button>
                    
                    <Button mode='outlined' onPress={()=>navigation.navigate('login')} >
                        Voltar
                    </Button>
                </View>
            </Card.Content>
        </Card>
    </ScrollView>
  )
}
