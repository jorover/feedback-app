import React, {useState} from 'react'
import { data } from './data';
import { datas } from './datalist';

const GetRoadMapData = (filterItem:string | undefined) => {
    const [mainData, setMainData] = useState<datas[]>([]);

    React.useEffect(() => {
        const getItem = () => {
            const storedData = JSON.parse(localStorage.getItem('All Data') || "")
            const newData = storedData ? storedData : data
            const filteredData = newData.filter((item:datas) => {
                return item.status === filterItem
            })
    
            setMainData(filteredData)
        }
        getItem();
    }, [filterItem])

  return [mainData]

}

export default GetRoadMapData