import Logo from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

const Lain = ({navigation}) => {
    const [PelAwal, setAwal] = useState('');
  const [PelAkhir, setAkhir] = useState('');
  const [KelasLayanan, setLayanan] = useState('');
  const [Tanggal, setTanggal] = useState('');
  const [Waktu, setWaktu] = useState('');
  const [TipePenumpang, setTipe] = useState('');
  const [jumlah, setJumlah] = useState('');

  const Kirim = () => {
    navigation.navigate('Pesanan', {
      PelAwal: PelAwal,
      PelAkhir: PelAkhir,
      KelasLayanan: KelasLayanan,
      Tanggal: Tanggal,
      Waktu: Waktu,
      TipePenumpang: TipePenumpang,
      jumlah: jumlah,
    }) 
  }

  const [PelAwal_1, setAwal_1] = useState('');
  const [PelAkhir_1, setAkhir_1] = useState('');
  const [KelasLayanan_1, setLayanan_1] = useState('');
  const [Tanggal_1, setTanggal_1] = useState('');
  const [Waktu_1, setWaktu_1] = useState('');
  const [TipePenumpang_1, setTipe_1] = useState('');
  const [jumlah_1, setJumlah_1] = useState('');

  const Cancel = () => {
    navigation.navigate('Pembatalan', {
      PelAwal_1: PelAwal_1,
      PelAkhir_1: PelAkhir_1,
      KelasLayanan_1: KelasLayanan_1,
      Tanggal_1: Tanggal_1,
      Waktu_1: Waktu_1,
      TipePenumpang_1: TipePenumpang_1,
      jumlah_1: jumlah_1,
    })
  }

  return(
      <View style={hiasan.satu}>
        <Text style={hiasan.dua} >Menu</Text>
        <Text style={hiasan.dua} >Cek Pemesanan</Text>
        <Text style={hiasan.dua} >Detail Profile</Text>
        <Text style={hiasan.dua} >Hubungi Kami</Text>
        <Text style={hiasan.dua} >Riwayat Pemesanan</Text>

        <View style={hiasan.navigasi_utama}>
        <View style={hiasan.navigasi_utama_1}>
          <Pressable onPress={()=>navigation.navigate('Home')} style={hiasan.tab_klik}
            android_ripple={{ borderless: true, radius: 45}}
          >
            <Logo name={"home-button"} height="22" width="30" color="blue"/>
            <Text style={hiasan.kata4}>Beranda</Text>
          </Pressable>

          <Pressable onPress={Kirim} style={hiasan.tab_klik}
            android_ripple={{ borderless: true, radius: 45}}
          >
            <Logo name={"black-bubble-speech"} height="22" width="30" color="blue"/>
            <Text style={hiasan.kata4}>Pesanan Saya</Text>
          </Pressable>

          <Pressable onPress={Cancel} style={hiasan.tab_klik}
            android_ripple={{ borderless: true, radius: 45}}
          >
            <Logo name={"cancel-button"} height="22" width="30" color="blue"/>
            <Text style={hiasan.kata4}>Pembatalan</Text>
          </Pressable>

          <Pressable style={hiasan.tab_klik}
            android_ripple={{ borderless: true, radius: 45}}
          >
            <Logo name={"menu-button"} height="22" width="30" color="blue"/>
            <Text style={hiasan.kata4}>Lainnya</Text>
          </Pressable>

        </View>
      </View>
      </View>
  )
}

export default Lain

const hiasan = StyleSheet.create({
    satu:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dua:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
        
    },
    navigasi_utama:{
        position: 'absolute',
        bottom: 5,
        alignItems: 'center'
      },
      navigasi_utama_1: {
        borderRadius: 10,
        width: '93%',
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        justifyContent: 'space-evenly'
      },
      tab_klik: {
        padding: 15,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 3
      },
      kata4:{
        color: 'blue'
      }
})