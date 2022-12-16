import { useEffect, useState } from "react";
import { Button, Card, Text } from "react-native-paper";
import { Header } from "../../Header";
import * as services from '../../../services/contact-services'
import { Linking, ScrollView } from "react-native";

export function ConsultaContatos({navigation}){

    const [contatos, setContatos] = useState([])

    const consultarContatos = () => {
        services.getAllContato()
        .then(
            result => {
                setContatos(result)
            }
        )
        .catch(
            err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
      consultarContatos()

      const result = navigation.addListener('focus', ()=> {
        consultarContatos()
      })
      return result

    }, [navigation])
    

    return(
        <>
        <ScrollView>
            <Header navigation={navigation}/>
            <Card>
                <Card.Title
                title='Lista de contatos'
                subtitle='O que deseja fazer?'
                />
            </Card>

            {
                contatos.map((contato, i) => {
                    return(
                        <Card key={i}>
                            <Card.Content>
                                <Text style={{fontWeight:'bold', fontSize: 16}}>{contato.nome}</Text>
                                <Text>{contato.email}</Text>
                                <Text>{contato.telefone}</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button 
                                onPress={() => {
                                    navigation.navigate('editar-contato',{
                                        idContato: contato.idContato
                                    })
                                }}
                                icon="pencil-outline">
                                    Editar
                                </Button>
                                <Button onPress={() => {
                                    navigation.navigate('excluir-contato',{
                                        idContato: contato.idContato
                                    })
                                }}
                                 icon="delete">Excluir
                                 </Button>
                                <Button 
                                   onPress={() => {Linking.openURL(`tel:${contato.telefone}`)}} icon="phone">Ligar
                                </Button>
                            </Card.Actions>
                        </Card>
                    )
                })
            }
        </ScrollView>
        </>
    )
}