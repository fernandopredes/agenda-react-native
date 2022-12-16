
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import * as services from '../../../services/contact-services'
import { Header } from "../../Header";

export function ExcluirContato({navigation, route}){

    const {idContato} = route.params
    const [contato, setContato] = useState({})

    
        services.getContatoById(idContato)
        .then(
            result=>{
                setContato(result)
            }
        )
        .catch(
            error=>{
                console.log(error)
            }
        )
    
        const confirmDelete = () => {
            services.deleteById(contato.idContato)
            .then(
                res=>{
                    Alert.alert('sucesso', 'contato deletado.')
                    navigation.navigate('consulta-contatos')
                }
            )
            .catch(
                err=>{
                    Alert.alert('erro', 'não foi possível deletar o contato.')
                }
            )
        }    
    

    return(
        <>
         <Header navigation={navigation}/>
         <Card>
            <Card.Title
            title='Confirmação de exclusão' 
            subtitle={`Deseja realmente excluir ${contato.nome}`}
            />
            <Card.Content>
                <Text>
                    {contato.nome}
                </Text>

                <Text>
                    {contato.email}
                </Text>

                <Text>
                    {contato.telefone}
                </Text>
            <View style={{marginTop: 30 }}>
                <Button 
                mode='contained'
                onPress={()=>{confirmDelete()}}
                >Confirmar Exclusão</Button>
                <Button
                 mode='outlined'
                 onPress={()=>{navigation.navigate('consulta-contatos')}}
                >Cancelar Exclusão</Button>
            </View>
            </Card.Content>
         </Card>
        </>
    )
}