export interface BliddoQRCodeProps {
    size?: number
    bgColor?: string
    fgColor?: string
    /**
     * The id of the qr code you want to track, 
     * make sure you created it on bliddo.com and copied the id on our website 
     * before using this component.
     */
    qrCodeId: string
}