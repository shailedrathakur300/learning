import { Text, View ,Image,StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
        <Image
          source={require('@/assets/images/BannerImage.png')}
          style={styles.BannerImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.MainTextHome}>
            
            <h1>Pick Some Habit To Get Started</h1>
          </Text>
        </View>
        {/* <View style={styles.TextRecommandedHabit}>
          <Text>Recommanded Habit</Text>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex:1,
  width:360,
  height:740,
  position:'relative',
  overflow:'hidden'

  
 },
 BannerImage:{
  width:"100%",
  height:"100%",
  position:'absolute',
  top:0,
  left:0,
 },
 textContainer: {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  position:'absolute',
  top:0,
  left:0,
  right:0,
  bottom:50,
},
 MainTextHome:{
  fontSize:15,
  alignItems:'center',
  left:20
 },
 TextRecommandedHabit:{
  fontSize:15,
  left:5
 }

})