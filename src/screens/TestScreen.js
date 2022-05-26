import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primary } from "../utils/colors";


const PrivacyPolicyScreen = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{alignItems: 'center', justifyContent: 'space-around', height: 180, margin: 30}}>
        <View>
          <Image style={{ width: 80, height: 80, borderRadius: 80, alignSelf: 'center', marginBottom: 10 }}
            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/user/115/61934f748437387.622e0b680865f.jpg' }} />
            <Text style={{color: primary, fontSize: 20, fontWeight: 'bold'}}>Mahmoud AlHabil</Text>
        </View>
        <View style={{flexDirection: 'row', width: '50%', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://m.facebook.com/people/Mahmoud-AlHabil/100010120299334')}
            style={{  }}>
            <Icon name='facebook' size={44} color={primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=970592773664')}
            style={{  }}>
            <Icon name='whatsapp' size={44} color={primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/MahmoudAlHabil')}
            style={{  }}>
            <Icon name='github' size={44} color={primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'space-around', height: 180, margin: 30}}>
        <View>
          <Image style={{ width: 80, height: 80, borderRadius: 80, alignSelf: 'center', marginBottom: 10 }}
            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/user/115/cfe42c394600227.623dc988a998e.jpg' }} />
            <Text style={{color: primary, fontSize: 20, fontWeight: 'bold'}}>Ahmed Alshareif</Text>
        </View>
        <View style={{flexDirection: 'row', width: '50%', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com/Ahmed.Mohammed.AlShareif')}
            style={{  }}>
            <Icon name='facebook' size={44} color={primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=972567222788')}
            style={{  }}>
            <Icon name='whatsapp' size={44} color={primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/AhmedAlshareif')}
            style={{  }}>
            <Icon name='github' size={44} color={primary} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default PrivacyPolicyScreen; 