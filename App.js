import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Alert, StyleSheet } from 'react-native';
import downarrow from './Assets/downarrow.png';
import QRCode from 'react-native-qrcode-svg';
import share from './Assets/share.png';
import wallet from './Assets/wallet.png';
import apps from './Assets/apps.png';
import email from './Assets/email.png';
import background from './Assets/background.png';
import airdrop from './Assets/airdrop.png';

const App = () => {

  // share my QRCode..
  const handleShareQRCode = () => {
    Alert.alert('share my QRCode..')
  }

  // share my card...
  const handleShareCard = () => {
    Alert.alert('share my card...')
  }

  // Add card to wallet..
  const handleCardWallet = () => {
    Alert.alert('Add card to wallet..')
  }

  // Add card to HomeScreen
  const handleHomeScreen = () => {
    Alert.alert('Add card to HomeScreen...')
  }

  // Create Email signature...
  const handleEmailSignature = () => {
    Alert.alert('Create Email signature...')
  }

  // Create Virtual BackGround....
  const handleBackground = () => {
    Alert.alert('Create Virtual BackGround....')
  }

  // Share with airDrop...
  const handleAirDrop = () => {
    Alert.alert('Share with airDrop...')
  }


  return (

    <View style={style.mainContainer}>
      <ScrollView>

        {/* ............SHARE MY QR CODE................ */}

        <TouchableOpacity style={style.BTNComponent}
          onPress={handleShareQRCode}
        >
          <Image source={downarrow} style={style.AllIMGs} />
          <Text style={style.BTNText}>Share my card</Text>
        </TouchableOpacity>

        {/* ..............QR CODE ............... */}

        <View style={style.QRCodeComponent}>
          <QRCode
            value="https://nexalink.pro/"
            size={150}
            color="black"
            backgroundColor="white"
          />
        </View>


        {/* ........CARD DETAILS ........ */}

        <View style={style.CardComponent}>

          {/* Share my card */}
          <Pressable style={style.CardDetails} onPress={handleShareCard}>
            <Image source={share} style={style.AllIMGs} />
            <Text style={style.CardText}>Share my card</Text>
          </Pressable>

          {/* Add card to wallet */}
          <Pressable style={style.CardDetails} onPress={handleCardWallet}>
            <Image source={wallet} style={style.AllIMGs} />
            <Text style={style.CardText}>Add card to wallet</Text>
          </Pressable>

          {/* Add card to home screen */}
          <Pressable style={style.CardDetails} onPress={handleHomeScreen}>
            <Image source={apps} style={style.AllIMGs} />
            <Text style={style.CardText}>Add card to home screen</Text>
          </Pressable>

          {/* Creact Email signaure */}
          <Pressable style={style.CardDetails} onPress={handleEmailSignature}>
            <Image source={email} style={style.AllIMGs} />
            <Text style={style.CardText}>Creact Email signaure</Text>
          </Pressable>

          {/* Create Virtual background */}
          <Pressable style={style.CardDetails} onPress={handleBackground}>
            <Image source={background} style={style.AllIMGs} />
            <Text style={style.CardText}>Create Virtual background</Text>
          </Pressable>


        </View>


        {/* ..........SHARE WITH AIRDROPS........ */}

        <TouchableOpacity style={style.BTNComponent} onPress={handleAirDrop}>
          <Image source={airdrop} style={style.AllIMGs} />
          <Text style={style.BTNText}>Share with AirDrop</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>




  );
}


// .......STYLE.......

const style = StyleSheet.create({

  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF'
  },
  BTNComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#FF5800',
    height: 50,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    flexDirection: 'row'
  },
  AllIMGs: {
    height: 20,
    width: 20
  },
  BTNText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  QRCodeComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  CardComponent: {
    height: 350,
    width: '90%',
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    justifyContent: 'center'
  },
  CardDetails: {
    flexDirection: 'row',
    gap: 20,
    margin: 20
  },
  CardText: {
    color: '#000',
    fontWeight: 'bold'
  }

})

export default App;
