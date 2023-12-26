import React from 'react'
import ReactDOM from 'react-dom/client'
import Alert from "./Alert"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Alert
      type="warning"
      heading="Not good..."
      closeable
      onClose={() => console.log("INFO :: Alert was closed")}
      >
      Oh oh...
    </Alert>
  </React.StrictMode>,
)
