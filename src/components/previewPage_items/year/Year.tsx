import React from 'react';
import style from './Year.module.css'
import type { PicturesId } from '../../types'

const Year: React.FC<{ filmData: PicturesId }> = ({ filmData }) => {
  return (
    <>
      {
        filmData.year ?
          <h3>Year: {filmData.year}</h3>
          :
          null
      }
    </>
  )
}

export default Year;