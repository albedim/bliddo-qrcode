import { QRCode } from "react-qrcode";
import { BliddoQRCodeProps } from "../../types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";

export const BliddoQRCode: React.FC<BliddoQRCodeProps> = ( props ) => {

  const [qrCodeFlowUrl, setQrCodeFlowUrl] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getCode = async () => {
    await axios.get(BASE_URL + `/qrcodes/${props.qrCodeId}`)
    .then(res => {
      setQrCodeFlowUrl(res.data.flowUrl)
      setIsLoading(false)
    })
    .catch(err => {
      throw new Error(err.response.data.error.message)
    })
  }

  useEffect(() => {
    getCode()
  }, [])

  if (isLoading) {
    return null
  }
  
  return (
    <QRCode
      value={qrCodeFlowUrl}
      size={props.size || 400}
      bgColor={props.bgColor || "white"}
      fgColor={props.fgColor || "black"}
    />
  )
}