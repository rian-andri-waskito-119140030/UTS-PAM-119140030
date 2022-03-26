import Logo from 'react-native-ico-material-design';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const Batal = ({navigation}) => {
    const [PelAwal, setAwal] = useState('');
    const [PelAkhir, setAkhir] = useState('');
    const [KelasLayanan, setLayanan] = useState('');
    const [Tanggal, setTanggal] = useState('');
    const [Waktu, setWaktu] = useState('');
    const [TipePenumpang, setTipe] = useState('');
    const [jumlah, setJumlah] = useState('');

    const [PelAwal_1, setAwal_1] = useState('');
    const [PelAkhir_1, setAkhir_1] = useState('');
    const [KelasLayanan_1, setLayanan_1] = useState('');
    const [Tanggal_1, setTanggal_1] = useState('');
    const [Waktu_1, setWaktu_1] = useState('');
    const [TipePenumpang_1, setTipe_1] = useState('');
    const [jumlah_1, setJumlah_1] = useState('');
  
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
    const navigasi = useRoute()

    const tampil = (mulai, selesai, layanan, tanggal, waktu, tipe, jumlah) => {
        if ((mulai == '') || (selesai == '') || (layanan == '') || (tanggal == '') || (waktu == '') || (tipe == '') || (jumlah == '')){
            return <View>
                <Text style={styles.satu}>Tiket Belum di pesan</Text>
            </View>
        }
        else{
            return <View style={styles.tiga}>
                <View style={styles.dua}>
                    <Text style={styles.empat}>Pelabuhan Awal</Text>
                    <View style={styles.lima}>
                        <Text style={styles.enam}>{navigasi.params.PelAwal_1}</Text>
                    </View>
                    <Text style={styles.empat}>Pelabuhan Tujuan</Text>
                    <View style={styles.lima}>
                        <Text style={styles.enam}>{navigasi.params.PelAkhir_1}</Text>
                    </View>
                    <View style={styles.tujuh}></View>
                    <View style={styles.delapan}>
                        <Text style={styles.sembilan}>Kelas Layanan</Text>
                        <Text style={styles.sembilan}>{navigasi.params.KelasLayanan_1}</Text>
                    </View>
                    <View style={styles.delapan}>
                        <Text style={styles.sembilan}>Tanggal</Text>
                        <Text style={styles.sembilan}>{navigasi.params.Tanggal_1}</Text>
                    </View>
                    <View style={styles.delapan}>
                        <Text style={styles.sembilan}>Waktu</Text>
                        <Text style={styles.sembilan}>{navigasi.params.Waktu_1}</Text>
                    </View>
                    <View style={styles.delapan}>
                        <Text style={styles.sembilan}>Tipe Penumpang</Text>
                        <Text style={styles.sembilan}>{navigasi.params.TipePenumpang_1}</Text>
                    </View>
                    <View style={styles.delapan}>
                        <Text style={styles.sembilan}>Jumlah</Text>
                        <Text style={styles.sembilan}>{navigasi.params.jumlah_1}</Text>
                    </View>
                    <View style={styles.tujuh}></View>
                    <View style={styles.delapan}>
                        <Text style={styles.sembilan}>Harga</Text>
                        <Text style={styles.sembilan}>----</Text>
                    </View>
                </View>
            </View>
        }
    }

    return(
        <View style={styles.sepuluh}>
            <View style={styles.sebelas}>
                <Text style={styles.duabelas}>Pesanan Anda:</Text>
                {tampil(navigasi.params.PelAwal_1, navigasi.params.PelAkhir, navigasi.params.KelasLayanan_1, navigasi.params.Tanggal_1, navigasi.params.Waktu_1, navigasi.params.TipePenumpang_1, navigasi.params.jumlah_1)}
            </View>

            <View style={styles.navigasi_utama}>
            <View style={styles.navigasi_utama_1}>
            <Pressable onPress={() => navigation.navigate('Home')}  style={styles.tab_klik}
                android_ripple={{ borderless: true, radius: 45}}
            >
                <Logo name={"home-button"} height="22" width="30" color="blue"/>
                <Text style={styles.kata4}>Beranda</Text>
             </Pressable>

             <Pressable onPress={Kirim} style={styles.tab_klik}
                android_ripple={{ borderless: true, radius: 45}}
            >
             <Logo name={"black-bubble-speech"} height="22" width="30" color="blue"/>
             <Text style={styles.kata4}>Pesanan Saya</Text>
             </Pressable>

             <Pressable style={styles.tab_klik}
             android_ripple={{ borderless: true, radius: 45}}
            >
             <Logo name={"cancel-button"} height="22" width="30" color="blue"/>
             <Text style={styles.kata4}>Pembatalan</Text>
             </Pressable>

            <Pressable onPress={() => navigation.navigate('Lainnya')} style={styles.tab_klik}
                android_ripple={{ borderless: true, radius: 45}}
            >
             <Logo name={"menu-button"} height="22" width="30" color="blue"/>
             <Text style={styles.kata4}>Lainnya</Text>
            </Pressable>

            </View>
            </View>
        </View>
    )
}

export default Batal

const styles = StyleSheet.create({
    satu:{
        margin: 8, 
        fontSize: 14, 
        textAlign: 'center', 
        fontStyle: 'italic'
    },
    dua:{
        height: '80%', 
        borderColor: '#7a7a7a', 
        borderWidth: 1, 
        backgroundColor: '#E9E9E9', 
        borderRadius: 10, 
        marginTop: 5, 
        marginBottom: 5, 
        width: '100%', 
        flex: 1,
        padding: 10
    },
    tiga: {
        flex: 1, 
        marginBottom: 290 
    },
    empat:{
        fontWeight: 'bold', 
        fontSize: 16
    },
    lima:{
        flexDirection: 'row'
    },
    tujuh:{
        backgroundColor: '#2c3038', 
        width: '100%', 
        height: '1%', 
        borderRadius: 20, 
        marginTop: 5, 
        marginBottom: 5
    },
    delapan:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    sembilan:{
        fontSize: 15, 
        fontWeight: 'bold'
    },
    sepuluh:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    duabelas:{
        margin: 8, 
        fontSize: 14, 
        textAlign: 'center'
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