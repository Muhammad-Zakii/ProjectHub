import React from 'react'

import fileDownload from 'js-file-download'
import axios from 'axios'

export default function App() {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename)
      })
  }

  return (
    <div className='App'>
      <button
        onClick={() => {
          handleDownload(
            'https://res.cloudinary.com/dchhfc3sy/raw/upload/v1665261296/ProjectHub/Task_ujhmlz.zip',
            'sample.zip'
          )
        }}
      >
        Download Attachments
      </button>

      <button
        onClick={() => {
          handleDownload(
            'https://res.cloudinary.com/dchhfc3sy/image/upload/v1665261891/ProjectHub/ProjectHub pdf files/PDC_qcojkx.pdf',
            'sample.pdf'
          )
        }}
      >
        Download pdf
      </button>
    </div>
  )
}
