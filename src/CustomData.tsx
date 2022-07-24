import React from 'react'
import { datas } from './datalist';

const CustomData = ( data:datas[] ) => {
  const [customData, setCustomData] = React.useState<datas[]>([]); 
  
  const filterData = () => {
    const filteredData = data.filter(item => item.status !== 'planned' && item.status !== 'in-progress' && item.status !== 'live');
    setCustomData(filteredData)
  }

  React.useEffect(() => {
      filterData();
  }, [data])

  return [customData]
}

export default CustomData