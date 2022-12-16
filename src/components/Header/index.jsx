import { useState } from "react";
import { Alert, View } from "react-native";
import { Appbar } from "react-native-paper";
import * as auth from '../../auth/auth-app'

export function Header({navigation}){

    const [user, setUser] = useState({})

    auth.getData()
    .then(
        result => {
            const json = JSON.parse(result)
            setUser(json)
            
        }
        
    )

    const sair = () => {
        Alert.alert(
            'Encerrar Sessão',
            'Deseja realmente encerrar sua sessão?',
            [
                {
                    text:'Não'
                },

                {
                    text:'Sim',
                    onPress: () => {
                        auth.signOut()
                        .then(
                            () => {navigation.navigate('login')}
                        )
                    }
                },
            ]
        )
    }

    return(
        <View>
            <Appbar.Header>
                <Appbar.Content
                title='Agenda de Contatos'
                subtitle={`Olá ${user.nome}`}
                />
                <Appbar.Action  
                icon='home'
                onPress={()=> navigation.navigate('consulta-contatos')}
                />
                <Appbar.Action  
                icon='account-plus'
                onPress={()=> navigation.navigate('cadastro-contatos')}
                />
                <Appbar.Action  
                icon='logout'
                onPress={()=> sair()}
                />
            </Appbar.Header>
        </View>
    )
}