import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Pressable,
  Modal,
} from 'react-native';
import Awal from '../../componen/Awal';
import Akhir from '../../componen/Akhir';
import Kelas from '../../componen/Kelas';
import Tipe from '../../componen/Tipe';
import { setWarningHandler } from 'react-native/Libraries/Utilities/RCTLog';
import Logo from 'react-native-ico-material-design';
import Logo2 from 'react-native-ico'



const Home = ({navigation}) => {
  const [pilih_data_1, set_pilih_data_1] = useState('Pilih Pelabuhan Awal');
  const [start_1, set_start_1] = useState(false);

  const gantiawal = (beneran) =>{
    set_start_1(beneran)
  }
  const pilihData = (option) => {
    set_pilih_data_1(option)
    setAwal(option)
  }

  const [pilih_data_2, set_pilih_data_2] = useState('Pilih Pelabuhan Akhir');
  const [start_2, set_start_2] = useState(false);

  const gantiakhir = (beneran) =>{
    set_start_2(beneran)
  }
  const pilihData2 = (option) => {
    set_pilih_data_2(option)
    setAkhir(option)
  }

  const [pilih_data_3, set_pilih_data_3] = useState('Pilih Kelas Layanan');
  const [start_3, set_start_3] = useState(false);

  const gantikelas = (beneran) =>{
    set_start_3(beneran)
  }
  const pilihData3 = (option) => {
    set_pilih_data_3(option)
    setLayanan(option)
  }

  const [pilih_data_4, set_pilih_data_4] = useState('Pilih Jenis penumpang');
  const [start_4, set_start_4] = useState(false);

  const gantitipe = (beneran) =>{
    set_start_4(beneran)
  }
  const pilihData4 = (option) => {
    set_pilih_data_4(option)
    setTipe(option)
  }

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
    <View style={hiasan.utama}>
      <View style={hiasan.kotakForm}>
        <Text style={hiasan.katajudul}>Kapalzy</Text>

        <Text style={hiasan.kata1}>Pelabuhan Awal</Text>
        <View style={hiasan.pel_1}>
          <TouchableOpacity 
            style={hiasan.pel_2}
            onPress={() => gantiawal(true)}
          >
            <Text style={hiasan.kata2} onChangeText={(text)=> setAwal(text)}>{pilih_data_1}</Text>

          </TouchableOpacity>
          <Modal 
            transparent={true}
            animationType='none'
            visible={start_1}
            nRequestClose={()=> gantiawal(false)}
          >
            <Awal 
              gantiawal = {gantiawal}
              pilihData = {pilihData}
            />

          </Modal>
        </View>

        <Text style={hiasan.kata1}>Pelabuhan Akhir</Text>
        <View style={hiasan.pel_1}>
          <TouchableOpacity 
            style={hiasan.pel_2}
            onPress={() => gantiakhir(true)}
          >
            <Text style={hiasan.kata2} onChangeText={(text)=> setAkhir(text)}>{pilih_data_2}</Text>

          </TouchableOpacity>
          <Modal 
            transparent={true}
            animationType='none'
            visible={start_2}
            nRequestClose={()=> gantiakhir(false)}
          >
            <Akhir 
              gantiakhir = {gantiakhir}
              pilihData = {pilihData2}
            />

          </Modal>
        </View>

        <Text style={hiasan.kata1}>Kelas Layanan</Text>
        <View style={hiasan.pel_1}>
          <TouchableOpacity 
            style={hiasan.pel_2}
            onPress={() => gantikelas(true)}
          >
            <Text style={hiasan.kata2}>{pilih_data_3}</Text>

          </TouchableOpacity>
          <Modal 
            transparent={true}
            animationType='none'
            visible={start_3}
            nRequestClose={()=> gantikelas(false)}
          >
            <Kelas 
              gantikelas = {gantikelas}
              pilihData = {pilihData3}
            />

          </Modal>
        </View>


        <Text style={hiasan.kata1}>Tanggal</Text>
        <View style={hiasan.pel_1}>
          <TextInput 
            placeholder='day-month-year'
            style={hiasan.date}
            onChangeText={(text)=> setTanggal(text)}
          />
        </View>

        <Text style={hiasan.kata1}>Waktu</Text>
        <View style={hiasan.pel_1}>
          <TextInput 
            placeholder='09:00'
            style={hiasan.date}
            onChangeText={(text)=> setWaktu(text)}
          />
        </View>

        <Text style={hiasan.kata1}>Tipe Penumpang</Text>
        <View style={hiasan.pel_1}>
          <TouchableOpacity 
            style={hiasan.pel_2}
            onPress={() => gantitipe(true)}
          >
            <Text style={hiasan.kata2}>{pilih_data_4}</Text>

          </TouchableOpacity>
          <Modal 
            transparent={true}
            animationType='none'
            visible={start_4}
            nRequestClose={()=> gantitipe(false)}
          >
            <Tipe 
              gantitipe= {gantitipe}
              pilihData = {pilihData4}
            />

          </Modal>
        </View>

        <View style={hiasan.tombol}>
          <TouchableOpacity
            style={hiasan.tombol_2}
            onPress={Kirim}
          >
            <Text style={hiasan.kata3}>Buat Tiket</Text>
            </TouchableOpacity> 

        </View>
      </View>

      <View style={hiasan.navigasi_utama}>
        <View style={hiasan.navigasi_utama_1}>
          <Pressable style={hiasan.tab_klik}
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

          <Pressable onPress={() => navigation.navigate('Lainnya')} style={hiasan.tab_klik}
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

const hiasan = StyleSheet.create({
  utama:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    bottom: 4
  },
  kotakForm: {
    position: 'absolute',
    width: '87%',
    height: '87%',
    backgroundColor: '#ffffff',
    top: 10,
    borderRadius: 10,
    elevation: 10,
    alignItems: 'center'
  },
  katajudul:{
    alignItems: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10
  },
  kata1:{
    fontSize: 15,
    paddingTop: 4,
    textAlign: 'left',
    
  },
  pel_1:{
    flexDirection: 'row',
    paddingTop: 1
  },
  pel_2:{
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    width: '80%',
    marginLeft: 5,
    height: '100%'
  },
  kata2:{
    fontSize: 12,
    color: '#8c8c8c',
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5
  },
  date:{
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    fontSize: 12,
    paddingLeft: 10,
    marginLeft: 5,
    width: '80%',
    height: '70%'
  },
  tombol:{
    justifyContent: 'center',
    margin: 10
  },
  tombol_2:{
    backgroundColor: '#ffb647',
    borderRadius: 6,
    width: '35%'
  },
  kata3:{
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 15,
    margin: 8
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

export default Home;