// Type definitions for QRCode.js
// Project: [https://github.com/ushelp/EasyQRCode-React-Native] 
// Definitions by: Ray <inthinkcolor@gmail.com> 

export class QRCode {
    constructor(canvas: any, vOption: any);

    makeCode(sText: any): void;

    static CorrectLevel: {
        H: number;
        L: number;
        M: number;
        Q: number;
    };

}

export const Canvas: any;

