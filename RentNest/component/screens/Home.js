import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Home() {
  const [search, setsearch] = useState('');
  const searchdata = async (event) => {
    setsearch(event);
    // let key = event.toLowerCase();
    // if (key) {
    //   let result = await fetch(`https://haircare.onrender.com/search/${key}`);
    //   result = await result.json();
    //   if (result) {
    //     setData(result);
    //   }
    // } else {
    //   getData();
    // }
  };


  const Propertyimage = [
    { uri: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { uri: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { uri: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { uri: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]
  return (
    <View style={{ flex: 1, }}>
      <View style={{ margin: 25 }}>
        <Text style={{ fontWeight: '500', fontSize: 20, color: 'grey', marginBottom: 2 }}>Hi there!</Text>
        <Text style={{ fontWeight: '500', fontSize: 20, color: 'darkblue' }}>Start looking for your house</Text>

        <View style={[styles.searchinput]}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require('../images/search.png')}
              style={styles.searchicon}
            />
          </View>
          <View style={{ marginLeft: 5 }}>
            <TextInput placeholder='Search Here' onChangeText={(text) => { searchdata(text) }} style={{ fontSize: 18 }} />
          </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:13}}>
          <Text style={{backgroundColor:'skyblue',width:70,textAlign:'center',height:35,textAlignVertical:'center',marginRight:10,borderRadius:8,shadowColor:'black',elevation:10,opacity:10}}>Home</Text>
          <Text style={{backgroundColor:'white',width:70,textAlign:'center',height:35,textAlignVertical:'center',marginRight:10,borderRadius:8,shadowColor:'black',elevation:10,opacity:10}}>Apartment</Text>
          <Text style={{backgroundColor:'white',width:70,textAlign:'center',height:35,textAlignVertical:'center',marginRight:10,borderRadius:8,shadowColor:'black',elevation:10,opacity:10}}>PG</Text>
          <Text style={{backgroundColor:'white',width:70,textAlign:'center',height:35,textAlignVertical:'center',marginRight:10,borderRadius:8,shadowColor:'black',elevation:10,opacity:10}}>Flat</Text>

        </View>
        <View>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 8 }}>
            <Text style={{ fontWeight: '600', fontSize: 18 }}>Best For You</Text>
            <Text>View More</Text>
          </View>
          <ScrollView horizontal={true}>

            <View style={{ flexDirection: 'row' }}>

            <View style={{ borderRadius: 20, backgroundColor: 'white', marginRight: 20, overflow: 'hidden',shadowColor:'black',elevation:1,shadowOpacity:10 }}>
                <Image
                  source={{ uri: "https://images.unsplash.com/photo-1558969763-1e911dcd91e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                  style={{ width: 220, height: 200, }}
                />
                <View style={{ margin: 10 }}>
                  <Text style={{ fontWeight: '600', fontSize: 15 }}>Vasudev House</Text>
                  <Text style={{ fontSize: 12 }}>Near Reliance Mall,Rajkot</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bed_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 BHK</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bath_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 Bath</Text>
                    </View>
                  </View>

                </View>
              </View>



              <View style={{ borderRadius: 20, backgroundColor: 'white', marginRight: 20, overflow: 'hidden' }}>
                <Image
                  source={{ uri: "https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                  style={{ width: 220, height: 200, }}
                />
                <View style={{ margin: 10 }}>
                  <Text style={{ fontWeight: '600', fontSize: 15 }}>RJ House</Text>
                  <Text style={{ fontSize: 12 }}>Nana Varacha, surat</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bed_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 BHK</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bath_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 Bath</Text>
                    </View>
                  </View>

                </View>
              </View>
         

              <View style={{ borderRadius: 20, backgroundColor: 'white', marginRight: 20, overflow: 'hidden' }}>
                <Image
                  source={{ uri: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                  style={{ width: 220, height: 200, }}
                />
                <View style={{ margin: 10 }}>
                  <Text style={{ fontWeight: '600', fontSize: 15 }}>JK Haveli</Text>
                  <Text style={{ fontSize: 12 }}>Near Reliance Mall,Rajkot</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bed_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 BHK</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bath_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 Bath</Text>
                    </View>
                  </View>

                </View>
              </View>




              <View style={{ borderRadius: 20, backgroundColor: 'white', marginRight: 20, overflow: 'hidden' }}>
                <Image
                  source={{ uri: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                  style={{ width: 220, height: 200, }}
                />
                <View style={{ margin: 10 }}>
                  <Text style={{ fontWeight: '600', fontSize: 15 }}>SP House</Text>
                  <Text style={{ fontSize: 12 }}>Near Reliance Mall,Rajkot</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bed_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 BHK</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../images/bath_icon.png')}
                        style={{ width: 20, height: 20, marginRight: 2 }}
                      />
                      <Text style={{ textAlignVertical: 'center' }}>3 Bath</Text>
                    </View>
                  </View>

                </View>
              </View>


            </View>
          </ScrollView>
        </View>



        <View style={{ justifyContent: 'flex-end', marginTop: 15 }}>
          <Text style={{ fontSize: 17, }}>Most Popular</Text>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <ScrollView horizontal={true}>

              {
                Propertyimage.map((imageurl, i) => (
                  <Image
                    key={i}
                    source={{ uri: imageurl.uri }}
                    style={{ width: 100, height: 100, borderRadius: 20, marginRight: 20 }}
                  />
                ))
              }
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    searchinput: {
      fontSize: 25,
      color: 'black',
      width: 310,
      height: 50,
      borderWidth: 1,
      padding: 7,
      paddingLeft: 7,
      borderRadius: 10,
      marginTop: 20,
      textAlignVertical: "center",
      backgroundColor: 'white',
      borderColor: '#3498DB',
      flexDirection: 'row',
      marginBottom: 10,
    },
    searchicon: {
      width: 20,
      height: 20,
      marginLeft: 2,
      marginRight: 2,
      borderRadius: 8,
      marginTop: 6,
      marginBottom: 6,
      flexDirection: 'row',
    },


  }
)