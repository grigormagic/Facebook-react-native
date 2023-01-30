import React from "react";
import {View , ActivityIndicator} from "react-native";

export default function Loader(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<<<<<<< HEAD
          <ActivityIndicator size="large" color="rgb(132, 172, 232)" />
=======
          <ActivityIndicator size="big" color="rgb(132, 172, 232)" />
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439
      </View>
    );
}