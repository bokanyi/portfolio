import React from 'react'
import useGlobal from "../hooks/useGlobal"
import {$content} from "../states/content"

export const  Experiance = () =>  {

    const content = useGlobal($content)

  return (
    <div>Experiance</div>
  )
}
