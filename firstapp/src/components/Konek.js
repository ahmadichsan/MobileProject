import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios';
import { FormLabel, FormInput } from 'react-native-elements';

class Data extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          search: '',
          final: []
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount = () =>
      {
        // axios.get('http://192.168.100.29:3009/').then((respon) => {
        //     var hasil = respon.data;
        //     this.setState({
        //         final: hasil
        //     })
        // })
        axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Barcelona').then((respon) => {
            var hasil = respon.data;
            console.log(hasil[0].strPlayer)
            // this.setState({
            //     final: hasil
            // })
        })
      }

    //   handleChange(e) {
    //     this.setState({
    //       search: e.nativeEvent.text
    //     });
    //   }
    //   handleSubmit(nilai) {
    //     console.log(nilai);
        // axios.get('http://192.168.100.29:3009/')
        // .then((respon) => {
        //     var allValue = respon.data;
        //     this.setState({
        //         final: allValue
        //     })
        // })
    //   }

    render() 
    {
        // console.log(this.state.final)
        // const allData = this.state.final.map((item, index) => {
        //     console.log(item)
            // return <Text key={index}>{item}</Text>
        // })
        return (
            <View
                style=
                {{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* {allData} */}
            </View>
        );
    }
}
export default Data;