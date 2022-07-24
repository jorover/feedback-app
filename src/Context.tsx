import React, { createContext } from 'react'

interface typeCheck {
  getData:Function
}

const getData = (data:any) => {
  const filteredData = data.filter((item:any) => {
    return item.status !== 'planned' && item.status !== 'in-progress' && item.status !== 'live'
  })
  return filteredData;
}

const test:typeCheck ={
  getData: getData
}


const AppContext = createContext <typeCheck | null>(null);




const ContextProvider = ( {children}:any ) => {
  return (
    <AppContext.Provider value={test}>
          {children}
      </AppContext.Provider>
  )
}

export const CustomContext = () => {
  return React.useContext(AppContext)
}

export default ContextProvider