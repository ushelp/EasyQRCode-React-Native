import React, { Component } from 'react';
import {
  View
} from 'react-native';

// 1. Import 
import {QRCode, Canvas} from './easyqrcodejs';

class App extends  Component{
    
    // 3. Generate QRCode
    generateQRCode = (canvas) => {
        if (canvas !== null){
            // QRCode options
            var options = {
                text: "www.easyproject.cn/donation",
        	};
        	// Create QRCode Object
        	var qrCode = new QRCode(canvas, options);
        }
      }
    
   render() { 
      return (
          <View>
            {/* 2. QRCode Canvas  */}
            <Canvas ref={this.generateQRCode}/>
          </View>
      );
  }
};

export default App;