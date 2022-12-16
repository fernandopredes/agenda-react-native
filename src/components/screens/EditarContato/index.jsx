import { ScrollView, View, Alert } from 'react-native'
import { Button, Card, Text, TextInput, HelperText } from 'react-native-paper'
import { Header } from "../../Header";
import {useForm, Controller} from'react-hook-form'
import * as services from '../../../services/contact-services'
import { useState } from 'react';

export function EditarContato({navigation, route}){

    const {idContato} = route.params
    const [contato, setContato] = useState({})

    
        services.getContatoById(idContato)
        .then(
            result=>{
                setContato(result)
                console.log(result)
                reset({
                    idContato: result.idContato,
                    nome: result.nome,
                    email: result.email,
                    telefone: result.telefone
                    
                })
            }
        )
        .catch(
            error=>{
                console.log(error)
            }
        )

    const onSubmit = (data) => {
         services.putContato(data)
         .then(
            result => {
                Alert.alert('Sucesso!', `O contato ${result.nome} foi atualizado.`)
                navigation.navigate('consulta-contatos')
            }
         )
         .catch(
            e=>{console.log(e)
            Alert.alert('erro!','não foi possível realizar a atualização')}
         )
    }

    const{control,
        reset,
        handleSubmit,
       formState : {errors}
    } = useForm()
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <Header navigation={navigation}/>
            <Card>
                <Card.Title
                title='Edição de Contatos'
                subtitle='Edite um contato na sua agenda'
                />

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
                        name='telefone'
                        rules={{
                            required: 'Por favor, preencha este campo.'
                        }}
                        render={({field : {onChange, onBlur, value}}) => (
                                <TextInput 
                            label="Informe seu telefone"
                            mode="outlined"
                            placeholder='Ex: (xx)xxxxx-xxxx'
                            keyboardType='phone-pad'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            />
                        )}
                    />
                {
                    errors.telefone && <HelperText type="error">{errors.telefone.message}</HelperText>
                }
                </View>

                <View>
                    <Button mode='contained' onPress={handleSubmit(onSubmit)}>Editar cadastro</Button>
                </View> 
                </Card.Content>

            </Card>
        </ScrollView>
    )
}