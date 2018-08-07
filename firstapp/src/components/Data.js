import React, { Component } from 'react';
import { Text, ScrollView, View, Button, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements'
import axios from 'axios';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flex: 1,
      },
      thumbnailStyle: {
        height: 120,
        width: 120
        }
})



class Data extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          team: 'Barcelona',
          playerlist: []
        }
      }

    componentDidMount = () =>
    {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Barcelona').then((respon) => {
            var hasil = respon.data;
            // console.log(hasil.player)
            this.setState({
                playerlist: hasil.player
            })
        })
    }

    value = (val) =>
    {
        console.log(val)
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${val}`).then((respon) => {
            var hasil = respon.data;
            // console.log(hasil.player)
            this.setState({
                playerlist: hasil.player,
                team: val
            })
        })
    }

    render() 
    {
        // console.log(this.state.final)
        const allData = this.state.playerlist.map((item, index) => {
            // console.log(item.strPlayer)
            return <Card key={index} title={this.state.team}>
                    <View>
                    <Image
                        // resizeMode="cover"
                        style={style.thumbnailStyle}
                        source={{ uri: item.strThumb }}
                    />
                    <Text>{item.strPlayer}</Text>
                    </View>
            </Card>
        })
        
        return (
            <View style={style.container}>
            <Button
                style={style.buttonContainer}
                title="Barcelona"
                color="blue"
                onPress={() => this.value('Barcelona')}
            />
            <Button
                style={style.buttonContainer}
                title="Arsenal"
                color="red"
                onPress={() => this.value('Arsenal')}
            />
            <ScrollView>
                {allData}
            </ScrollView>
            </View>
        );
    }
}
export default Data;