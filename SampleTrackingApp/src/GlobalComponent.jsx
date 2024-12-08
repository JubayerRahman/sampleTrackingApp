import React, { createContext, useState } from 'react'

export const globalContent = createContext(null)

function GlobalComponent({children}) {

    const [newSubmit, setNewSubmit] = useState(false)

    const globalValue = {
        newSubmit,
        setNewSubmit,
    }
  return (
    <globalContent.Provider value={globalValue}>
        {children}
    </globalContent.Provider>
  )
}

export default GlobalComponent