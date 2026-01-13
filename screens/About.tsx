import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const About = ({ navigation }: any) => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:ballthekiller@gmail.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>เกี่ยวกับโปรแกรม</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📱 ข้อมูลโปรแกรม</Text>
          <Text style={styles.text}>
            โปรแกรมนี้เป็นแอปพลิเคชันสำหรับการจัดการและติดตามการเข้าสู่ระบบของผู้ใช้ (Authentication Management Application)
          </Text>
          <Text style={styles.text}>
            วันที่สร้าง: 13 มกราคม 2026
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨‍💻 ข้อมูลนักพัฒนา</Text>
          <View style={styles.developerInfo}>
            <Text style={styles.label}>ชื่อ:</Text>
            <Text style={styles.value}>Tibetan</Text>
          </View>
          <View style={styles.developerInfo}>
            <Text style={styles.label}>อีเมล:</Text>
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={styles.emailLink}>ballthekiller@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✨ คุณสมบัติหลัก</Text>
          <Text style={styles.featureText}>• ระบบเข้าสู่ระบบ (Login)</Text>
          <Text style={styles.featureText}>• การสมัครสมาชิก (Signup)</Text>
          <Text style={styles.featureText}>• การรีเซ็ตรหัสผ่าน (Forgot Password)</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.versionText}>เวอร์ชัน 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 8,
  },
  developerInfo: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginRight: 12,
    minWidth: 50,
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  emailLink: {
    fontSize: 14,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  versionText: {
    fontSize: 12,
    color: '#999',
  },
});

export default About;
