import React from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { Button, Card, HelperText, Text, TextInput } from 'react-native-paper'
import {useForm, Controller} from'react-hook-form'
import axios from 'axios'
import * as services from '../../../services/register-services'

export const Register = ({navigation}) => {

    const onSubmit = (data) =>{
       services.postRegister(data)
        .then(
            result =>{
                Alert.alert('Sucesso',`Parabéns ${result.nome}, sua conta foi criada!`)
                reset({
                    nome: '',
                    email: '',
                    senha:'',
                    confirmasenha:''
                })
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
         watch,
         getValues,
         handleSubmit,
        formState : {errors}
     } = useForm()

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Card>
            <Card.Cover  source={require('../../../images/bg-home.jpg')} />
            <Card.Title  title='Crie sua conta' subtitle='Informe seus dados' />
            <Card.Content>
                <View style={{marginBottom:10}}>
                    <Controller 
                        control={control}
                        name='nome'
                        rules={{
                            required: 'Por favor, preencha este campo.',
                            minLength : { 
                                value: 3,
                                message: 'Informe pelo menos 3 caracteres'
                            }
                        }}
                        render={({field : {onChange, onBlur, value}}) => (
                                <TextInput 
                            label="Informe seu nome"
                            mode="outlined"
                            placeholder='Ex: Carlos Eduardo'
                            keyboardType='default'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            />
                        )}
                    />
                {
                    errors.nome && <HelperText type="error">{errors.nome.message}</HelperText>
                }
                </View> 
                
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
                <Controller 
                        control={control}
                        name='confirmasenha'
                        rules={{
                            required: 'Por favor, preencha este campo.'
                        }}
                        render={({field : {onChange, onBlur, value}}) => (
                            <TextInput style={{marginBottom:10}}
                            label="Confirmar senha"
                            mode="outlined"
                            placeholder='Confirme a sua senha cadastrada'
                            keyboardType='default'
                            secureTextEntry={true}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            />
                        )}
                    />

                    {
                        watch('senha') !== watch('confirmasenha') && getValues ('confirmaSenha') ?  
                        <HelperText type="error">Senhas não conferem</HelperText> : null
                    }

                    {
                    errors.confirmasenha && <HelperText type="error">{errors.confirmasenha.message}</HelperText>
                    }
                    
                        
                </View>
                <View>
                    <Button style={{marginBottom:10}} mode='contained' onPress={handleSubmit(onSubmit)} >
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
