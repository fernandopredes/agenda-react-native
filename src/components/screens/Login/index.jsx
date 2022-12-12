import React from 'react'
import { ScrollView, View, Alert } from 'react-native'
import { Button, Card, Text, TextInput, HelperText } from 'react-native-paper'
import {useForm, Controller} from'react-hook-form'
import * as services from '../../../services/login-services'
import * as auth from '../../../auth/auth-app'

export const Login = ({navigation}) => {

    const onSubmit = (data) => {
        services.postLogin(data)
        .then(
            result => {
                auth.signIn(result)
                reset(
                        {
                            email:'',
                            senha:''
                        }
                     )
                Alert.alert('sucesso', 'usuário logado')
               navigation.navigate('consulta-contatos')
            }
        )
        .catch(
            e=>{
                Alert.alert('erro', e.response.data.message)
            }
        )
    }

    const{control,
        reset,
        handleSubmit,
       formState : {errors}
    } = useForm()

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Card>
            <Card.Cover  source={require('../../../images/bg-home.jpg')} />
            <Card.Title  title='Acessar Conta' subtitle='Informe seus dados' />
            <Card.Content>


                <View style={{marginBottom:10}}>
                    <Controller 
                        control={control}
                        name='email'
                        rules={{
                            required: 'Por favor, preencha este campo.',
                            pattern : {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: 'preencha um e-mail válido'
                            }
                        }}
                        render={({field : {onChange, onBlur, value}}) => (
                            <TextInput 
                            label="E-mail de acesso"
                            mode="outlined"
                            placeholder='Ex: joão@gmail.com'
                            keyboardType='email-address'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            />
                        )}
                    />
                    {
                    errors.email && <HelperText type="error">{errors.email.message}</HelperText>
                    }
                    
                 </View > 
                 <View style={{marginBottom:10}}>
                 <Controller 
                        control={control}
                        name='senha'
                        rules={{
                            required: 'Por favor, preencha este campo.',
                            minLength : { 
                                value: 8,
                                message: 'Informe pelo menos 8 caracteres'
                            }
                        }}
                        render={({field : {onChange, onBlur, value}}) => (
                            <TextInput 
                            label="Senha de acesso"
                            mode="outlined"
                            placeholder='Sua senha cadastrada'
                            keyboardType='default'
                            secureTextEntry={true}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            />
                        )}
                    />
                    {
                    errors.senha && <HelperText type="error">{errors.senha.message}</HelperText>
                    }
                </View>
                <View>
                    <Button style={{marginBottom:10}} mode='contained' onPress={handleSubmit(onSubmit)}>
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
