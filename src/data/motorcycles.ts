import { Motorcycle } from '../types';
import nmaxImg from '../assets/images/yamaha_nmax_turbo_1793097235564.jpg';
import aeroxImg from '../assets/images/yamaha_aerox_sport_1793097235686.jpg';
import fazzioImg from '../assets/images/yamaha_fazzio_classy_1793097237172.jpg';
import wr155Img from '../assets/images/yamaha_wr155_adventure_1793097237943.jpg';

export const MOTORCYCLES: Motorcycle[] = [
  {
    id: 'nmax-turbo',
    name: 'Yamaha NMAX Turbo / Neo',
    series: 'Maxi Series',
    tagline: 'Performa Maxi Flagship dengan Sensasi Berkendara Turbo & Fitur YECVT',
    engine: '155 cc Blue Core VVA, 4-Katup, Berpendingin Cairan',
    power: '11.3 kW (15.3 PS) / 8.000 rpm',
    torque: '14.2 Nm / 6.500 rpm',
    fuelSystem: 'Fuel Injection (FI)',
    fuelCapacity: '7.1 Liter',
    transmission: 'YECVT (Yamaha Electric Continuous Variable Transmission)',
    starter: 'Electric Starter',
    curbWeight: '135 kg',
    features: [
      'Mesin Blue Core 155cc VVA Generasi Terbaru',
      'YECVT Mode Berkendara (T-Mode & S-Mode)',
      'Dual Channel ABS & Traction Control System (TCS)',
      'Layar Multi-Infotainment Display & Navigasi TFT Garmin',
      'Smart Key System (Keyless) & Electric Power Outlet',
      'Bagasi Luas 25 Liter Muat Helm Full Face'
    ],
    bestFor: 'Kenyamanan mobilitas jarak jauh antar-kabupaten Luwuk, Toili, dan Morowali dengan stabilitas berkendara premium.',
    targetRegion: ['Luwuk', 'Morowali', 'Toili'],
    image: nmaxImg,
    badge: 'Paling Diminati di Morowali & Luwuk'
  },
  {
    id: 'aerox-155',
    name: 'Yamaha All New Aerox 155 Connected',
    series: 'Maxi Series',
    tagline: 'DNA Super Sporty Skutik dengan Akselerasi Tercepat di Kelasnya',
    engine: '155 cc Blue Core VVA, SOHC, 4-Langkah Berpendingin Cairan',
    power: '11.3 kW (15.3 PS) / 8.000 rpm',
    torque: '13.9 Nm / 6.500 rpm',
    fuelSystem: 'Fuel Injection (FI)',
    fuelCapacity: '5.5 Liter',
    transmission: 'V-Belt Otomatis',
    starter: 'Electric Starter',
    curbWeight: '125 kg',
    features: [
      'Mesin 155cc VVA Performa Tinggi',
      'Desain Bodi Super Sporty & Agresif',
      'Konektivitas Smartphone Y-Connect',
      'Lampu Depan & Belakang Full LED Tajam',
      'Sub-Tank Suspension untuk Kestabilan Tikungan',
      'Smart Key System & Ban Tubeless Super Lebar'
    ],
    bestFor: 'Anak muda, profesional, dan pekerja industri tambang Morowali yang menginginkan motor bertenaga tinggi, responsif, dan stylish.',
    targetRegion: ['Morowali', 'Luwuk', 'Toili'],
    image: aeroxImg,
    badge: 'Favorit Karyawan Tambang Morowali'
  },
  {
    id: 'fazzio-hybrid',
    name: 'Yamaha Fazzio Hybrid Connected',
    series: 'Classy Series',
    tagline: 'Gaya Retro Modern Berkelas dengan Teknologi Hybrid Ramah Lingkungan',
    engine: '124.86 cc Blue Core Hybrid, SOHC 2-Katup, Pendingin Udara',
    power: '6.2 kW (8.4 PS) / 6.500 rpm',
    torque: '10.6 Nm / 4.500 rpm',
    fuelSystem: 'Fuel Injection (FI)',
    fuelCapacity: '5.1 Liter',
    transmission: 'V-Belt Otomatis',
    starter: 'Electric Starter',
    curbWeight: '95 kg',
    features: [
      'Mesin Blue Core Hybrid (Electric Power Assist Start)',
      'Desain Klasik Timeless dengan Aksen Fresh',
      'Y-Connect Smartphone Connectivity',
      'Smart Key System & Smart Lock Brake',
      'Bagasi Luas 17.8 Liter & Double Carabiner Hook',
      'Konsumsi Bahan Bakar Ekstra Irit'
    ],
    bestFor: 'Mobilitas harian dalam kota Luwuk dan Toili, sangat lincah, ringan dikendarai, dan hemat bahan bakar.',
    targetRegion: ['Toili', 'Luwuk'],
    image: fazzioImg,
    badge: 'Sangat Hemat BBM'
  },
  {
    id: 'wr-155-r',
    name: 'Yamaha WR 155 R Dual-Sport',
    series: 'Sport & Adventure',
    tagline: 'Motor Trail Sejati Siap Libas Segala Kontur Jalan dan Proyek Lapangan',
    engine: '155 cc VVA, 4-Langkah, Berpendingin Cairan SOHC 4-Katup',
    power: '12.3 kW (16.7 PS) / 10.000 rpm',
    torque: '14.3 Nm / 6.500 rpm',
    fuelSystem: 'Fuel Injection (FI)',
    fuelCapacity: '8.1 Liter (Terbesar di Kelas Trail 150cc)',
    transmission: 'Manual 6-Speed',
    starter: 'Electric Starter',
    curbWeight: '134 kg',
    features: [
      'Mesin 155cc VVA Paling Bertenaga di Kelas Trail',
      'Suspensi Depan Teleskopik Kokoh Diameter 41mm',
      'Suspensi Belakang Monoshock Linked Type dengan Preload',
      'Kapasitas Tangki 8.1 Liter untuk Daya Jelajah Luas',
      'Rangka Semi Double Cradle Kuat & Stabil',
      'Rem Cakram Gelombang (Wavy Disc Brake) Depan Belakang'
    ],
    bestFor: 'Jalur perkebunan & pertanian Toili serta medan jalan proyek dan medan menantang Morowali - Bahodopi.',
    targetRegion: ['Morowali', 'Toili', 'Luwuk'],
    image: wr155Img,
    badge: 'Tangguh Segala Medan'
  },
  {
    id: 'grand-filano',
    name: 'Yamaha Grand Filano Hybrid Connected',
    series: 'Classy Series',
    tagline: 'Kemewahan Skutik Premium Perkotaan dengan Fitur Luxury Lengkap',
    engine: '124.86 cc Blue Core Hybrid, SOHC Berpendingin Udara',
    power: '6.1 kW / 6.500 rpm',
    torque: '10.4 Nm / 5.000 rpm',
    fuelSystem: 'Fuel Injection (FI)',
    fuelCapacity: '4.4 Liter (Convenience Tank Front Refuel)',
    transmission: 'V-Belt Otomatis',
    starter: 'Electric Starter',
    curbWeight: '100 kg',
    features: [
      'TFT Sub-Display Digital dengan Animasi Elegan',
      'Smart Front Refuel (Isi Bensin Tanpa Buka Jok)',
      'Lampu Diamond Shape Full LED & Hazard Lamp',
      'Bagasi Raksasa 27 Liter dengan Lampu LED Penerang',
      'Smart Key System (Keyless) & Answer Back',
      'Teknologi Blue Core Hybrid Hemat Bahan Bakar'
    ],
    bestFor: 'Eksekutif, PNS, tenaga medis, dan kalangan pebisnis di pusat kota Luwuk yang mengutamakan tampilan prestisius.',
    targetRegion: ['Luwuk', 'Toili'],
    image: fazzioImg,
    badge: 'Desain Mewah Premium'
  },
  {
    id: 'gear-125',
    name: 'Yamaha Gear 125 Multi-Purpose',
    series: 'Matic Praktis',
    tagline: 'Matic Serbaguna Tangguh untuk Usaha, Belanja, dan Kerja Lapangan',
    engine: '124.96 cc Blue Core, 4-Langkah, SOHC 2-Katup',
    power: '7.0 kW / 8.000 rpm',
    torque: '9.5 Nm / 5.500 rpm',
    fuelSystem: 'Fuel Injection (FI)',
    fuelCapacity: '4.2 Liter',
    transmission: 'V-Belt Otomatis',
    starter: 'Electric & Kick Starter',
    curbWeight: '95 kg',
    features: [
      'Mesin Blue Core 125cc Teruji Kuat & Irit',
      'Double Hook Gantungan Barang Serbaguna',
      'Pijakan Kaki Anak & Akses Dek Kaki Luas',
      'Electric Power Socket untuk Cas HP',
      'Ban Tubeless Lebar & Lampu LED Depan',
      'Stop & Start System (Tipe S Version)'
    ],
    bestFor: 'Kendaraan operasional harian keluarga di Toili dan transportasi praktis pekerja shift di Morowali.',
    targetRegion: ['Toili', 'Morowali', 'Luwuk'],
    image: nmaxImg,
    badge: 'Pilihan Ekonomis & Kuat'
  }
];
