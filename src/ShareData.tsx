import React, {useState} from 'react'
import { data } from './data';
import { datas } from './datalist';

const ShareData = (filterItem:string | undefined) => {
    const [mainData, setMainData] = useState<datas[]>([]);

    const getItem = () => {
        const storedData = JSON.parse(localStorage.getItem('All Data') || "")
        const newData = storedData ? storedData : data
        const filteredData = newData.filter((item:datas) => {
            return item.id === Number(filterItem)
        })

        return setMainData(filteredData)
    }

    React.useEffect(() => {
        getItem(); //eslint-disable-next-line 
    }, [filterItem])

  return [mainData]
}

export default ShareData