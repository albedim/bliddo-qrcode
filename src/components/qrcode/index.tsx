import { QRCode } from "react-qrcode";
import { BliddoQRCodeProps } from "../../types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";

export const BliddoQRCode: React.FC<BliddoQRCodeProps> = ( props ) => {

  const [qrCodeFlowUrl, setQrCodeFlowUrl] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCode = async () => {
    await axios.get('https://bliddo.pythonanywhere.com/qrcodes/' + props.qrCodeDevKey)
    .then(res => {
      setQrCodeFlowUrl(res.data.param.flow_url)
      setIsLoading(false)
    })
    .catch(err => {
      throw new Error("An error occurred while fetching the qr code")
    })
  }

  useEffect(() => {
    getCode()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <QRCode
        value={qrCodeFlowUrl}
        size={props.size}
        bgColor={props.bgColor}
        fgColor={props.fgColor}
      />
    </div>
  )
}