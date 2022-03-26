import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Logo from 'react-native-ico-material-design';
import Data from '../../Data/Data.json';
import { useRoute } from '@react-navigation/native';
import AndroidHorizontalScrollViewNativeComponent from 'react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollViewNativeComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import data from 'react-native-ico-material-design/src/data';

const Pesanan = ({navigation}) => {
    const navigasi = useRoute();

    const event_scroll = ({ukuran_1, ukuran_2, ukuran_3}) => {
        const ukuran_4 = 20;
        return ukuran_1.height + ukuran_2.y >= ukuran_3 - ukuran_4;
    };

    const [PelAwal_1, setAwal_1] = useState(navigasi.params.PelAwal);
    const [PelAkhir_1, setAkhir_1] = useState(navigasi.params.PelAkhir);
    const [KelasLayanan_1, setLayanan_1] = useState(navigasi.params.KelasLayanan);
    const [Tanggal_1, setTanggal_1] = useState(navigasi.params.Tanggal);
    const [Waktu_1, setWaktu_1] = useState(navigasi.params.Waktu);
    const [TipePenumpang_1, setTipe_1] = useState(navigasi.params.TipePenumpang);
    const [jumlah_1, setJumlah_1] = useState(navigasi.params.jumlah);

    const cancel = () => {
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

    const cancel_empety = () => {
        navigation.navigate('Pembatalan', {
            PelAwal_1: '',
            PelAkhir_1: '',
            KelasLayanan_1: '',
            Tanggal_1: '',
            Waktu_1: '',
            TipePenumpang_1: '',
            jumlah_1: '',
          })
    }

    const tampil = (Awal_3, Akhir_3, KelasLayanan_3, Tanggal_3, Waktu_3, TipePenumpang_3, jumlah_3) => {
        if ((Awal_3 == '') || (Akhir_3 == '') || (KelasLayanan_3 == '') || (Tanggal_3 == '') || (Waktu_3 == '') || (TipePenumpang_3 == '') || (jumlah_3 == '')) {
            return <View>
                <Text style={{textAlign: "center"}}>Maaf, Pesanan Kosong</Text>
            </View>
        }
        else{
            return <View>
                <View style={hiasan.container}>
                    <Text style={hiasan.satu}>Tiket Belum Tersedia</Text>
                    <Text style={hiasan.satu}>Tiket akan segera di proses</Text>
                    <Text style={hiasan.dua}>Pelabuhan Awal</Text>
                    <View style={hiasan.tiga}>
                        <Text style={hiasan.empat}>{navigasi.params.PelAwal}</Text>
                    </View>
                    <Text style={hiasan.dua}>Pelabuhan Tujuan</Text>
                    <View style={hiasan.tiga}>
                        <Text style={hiasan.empat}>{navigasi.params.PelAkhir}</Text>
                    </View>
                    <View style={hiasan.lima}></View>
                    <View style={hiasan.enam}>
                        <Text style={hiasan.tujuh}>Kelas Layanan</Text>
                        <Text style={hiasan.tujuh}>{navigasi.params.KelasLayanan}</Text>
                    </View>
                    <View style={hiasan.enam}>
                        <Text style={hiasan.tujuh}>Tanggal</Text>
                        <Text style={hiasan.tujuh}>{navigasi.params.Tanggal}</Text>
                    </View>
                    <View style={hiasan.enam}>
                        <Text style={hiasan.tujuh}>Waktu</Text>
                        <Text style={hiasan.tujuh}>{navigasi.params.Waktu}</Text>
                    </View>
                    <View style={hiasan.enam}>
                        <Text style={hiasan.tujuh}>Tipe Penumpang</Text>
                        <Text style={hiasan.tujuh}>{navigasi.params.TipePenumpang}</Text>
                    </View>
                    <View style={hiasan.enam}>
                        <Text style={hiasan.tujuh}>Jumlah Tiket</Text>
                        <Text style={hiasan.tujuh}>{navigasi.params.jumlah}</Text>
                    </View>
                    <View style={hiasan.lima}></View>
                    <View style={hiasan.enam}>
                        <Text style={hiasan.tujuh}>Harga Tiket</Text>
                        <Text style={hiasan.tujuh}>----------</Text>
                    </View>
                </View>
                <View style={hiasan.delapan}>
                    <TouchableOpacity
                        style={hiasan.sembilan}
                        onPress={cancel}
                    >
                        <Text style={sepuluh}>Cancel?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
    }

    return (
        <View style={hiasan.container_2}>
            <ScrollView
                //onScroll={({kejadian_scroll})=>{
                    //if (event_scroll(kejadian_scroll)) {

                    //}
               // }}
                //s//crollEventThrottle={500}
               style={hiasan.sebelas}
            >
                <View>
                    <Text style={hiasan.duabelas}>Tiket  yang sudah di pesan: </Text>
                    <View>
                        {tampil(navigasi.params.PelAwal, navigasi.params.PelAkhir, navigasi.params.KelasLayanan, navigasi.params.Tanggal, navigasi.params.Waktu, navigasi.params.TipePenumpang, navigasi.params.jumlah)}
                    </View>
                    <View style={hiasan.tigabelas}></View>
                    <Text style={hiasan.duabelas}>Daftar Tiket: </Text>
                    <View>
                        {
                            Data && Data.map(data_tiket =>{
                                return (
                                    <View style={hiasan.container}>
                                    <Text style={hiasan.dua}>Pelabuhan Awal</Text>
                                    <View style={hiasan.tiga}>
                                        <Text style={hiasan.empat}>{data_tiket.PelAwal}</Text>
                                    </View>
                                    <Text style={hiasan.dua}>Pelabuhan Tujuan</Text>
                                    <View style={hiasan.tiga}>
                                        <Text style={hiasan.empat}>{data_tiket.PelAkhir}</Text>
                                    </View>
                                    <View style={hiasan.lima}></View>
                                    <View style={hiasan.enam}>
                                        <Text style={hiasan.tujuh}>Kelas Layanan</Text>
                                        <Text style={hiasan.tujuh}>{data_tiket.Layanan}</Text>
                                    </View>
                                    <View style={hiasan.enam}>
                                        <Text style={hiasan.tujuh}>Tanggal</Text>
                                        <Text style={hiasan.tujuh}>{data_tiket.Tanggal}</Text>
                                    </View>
                                    <View style={hiasan.enam}>
                                        <Text style={hiasan.tujuh}>Waktu</Text>
                                        <Text style={hiasan.tujuh}>{data_tiket.Waktu}</Text>
                                    </View>
                                    <View style={hiasan.enam}>
                                        <Text style={hiasan.tujuh}>Tipe Penumpang</Text>
                                        <Text style={hiasan.tujuh}>{data_tiket.Tipe}</Text>
                                    </View>
                                    <View style={hiasan.lima}></View>
                                    <View style={hiasan.enam}>
                                        <Text style={hiasan.tujuh}>Harga Tiket</Text>
                                        <Text style={hiasan.tujuh}>{data_tiket.Harga}</Text>
                                    </View>
                                </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>

        <View style={hiasan.navigasi_utama}>
        <View style={hiasan.navigasi_utama_1}>
          <Pressable onPress={() => navigation.navigate('Home')}  style={hiasan.tab_klik}
            android_ripple={{ borderless: true, radius: 45}}
          >
            <Logo name={"home-button"} height="22" width="30" color="blue"/>
            <Text style={hiasan.kata4}>Beranda</Text>
          </Pressable>

          <Pressable style={hiasan.tab_klik}
            android_ripple={{ borderless: true, radius: 45}}
          >
            <Logo name={"black-bubble-speech"} height="22" width="30" color="blue"/>
            <Text style={hiasan.kata4}>Pesanan Saya</Text>
          </Pressable>

          <Pressable onPress={cancel_empety} style={hiasan.tab_klik}
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
    continer:{
        borderColor: 'blue', 
        borderWidth: 1,
        backgroundColor: '#E9E9E9',
        borderRadius: 10, 
        marginTop: 5, 
        marginBottom: 5, 
        flex: 1, 
        padding: 10, 
        marginBottom: 10
    },
    satu:{
        fontStyle: 'italic',
        textAlign: 'right'
    },
    dua:{
        fontWeight: 'bold', 
        fontSize: 16
    },
    tiga:{
        flexDirection: 'row'
    },
    empat:{
        fontSize: 15, 
        paddingBottom: 5
    },
    lima:{
        backgroundColor: 'blue', 
        width: '100%', 
        height: '1%', 
        borderRadius: 20, 
        marginTop: 5, 
        marginBottom: 5
    },
    enam:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    tujuh:{
        fontSize: 15, 
        fontWeight: 'bold'
    },
    delapan:{
        marginBottom: 5, 
        alignItems: 'flex-end'
    },
    sembilan:{
        alignItems: 'center', 
        flexDirection: 'row', 
        width: '28%', 
        backgroundColor: '#ff5454', 
        borderRadius: 8, 
        borderWidth: 1, 
        borderColor: 'blue'
    },
    sepuluh:{
        padding: 5, 
        color: 'white', 
        fontWeight: 'bold'
    },
    container_2:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sebelas:{
        flex: 1, 
        width: '90%', 
        marginBottom: 65
    },
    duabelas:{
        margin: 8, 
        fontSize: 14, 
        textAlign: 'center'
    },
    tigabelas:{
        backgroundColor: '#2c3038', 
        width: '100%', 
        height: '0.2%', 
        borderRadius: 20
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

export default Pesanan