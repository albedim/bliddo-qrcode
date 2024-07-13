export interface BliddoQRCodeProps {
    size?: number
    bgColor?: string
    fgColor?: string
    /**
     * The key of the qr code you want to track. 
     * Go to our website (bliddo.com) to create your trackable
     * qr code and get the dev key to start using it in your code.
     */
    qrCodeDevKey: string
}