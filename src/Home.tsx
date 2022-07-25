import React, {useState} from 'react'
import TopBar from './TopBar'
import SuggestionsBar from './SuggestionsBar'
import FeedBacks from './FeedBacks'
import { data } from './data'
import { datas } from './datalist'
import { btnColor } from './AddBtnColor'
import Up from '../src/up.png'

const Home:React.FC = () => {

  const [mainData, setMainData] = useState<datas[] | any>([])
  const [noFeedBack, setNoFeedBack] = useState('')
  const firstStoredData = localStorage.getItem('All Data') as string;
  const colorBtn = localStorage.getItem('list Btn') !== null ? JSON.parse(localStorage.getItem('list Btn') || "").toLowerCase() : "all";
  const localData = data.filter(item => item.status !== 'planned' && item.status !== 'in-progress' && item.status !== 'live');
  const storedData = firstStoredData === null ? null : JSON.parse(localStorage.getItem('All Data') || '').filter((item:any) => item.status !== 'planned' && item.status !== 'in-progress' && item.status !== 'live');
  const allData = firstStoredData ? JSON.parse(localStorage.getItem('All Data') || '').filter((item:any) => item.status !== 'planned' && item.status !== 'in-progress' && item.status !== 'live') : localData;
  const eachOption:string | null = localStorage.getItem('Each Option') as string;
  const items = document.querySelectorAll('.eachOption') as NodeList;


  const getData = () => {
    const newData:datas[] = storedData === null ? localData : storedData;
    setMainData(newData)
    storeData();
    storeFilter();
  }

  const storeData = () => {
    if((firstStoredData && items) === null){
      localStorage.setItem('All Data', JSON.stringify(data))
      window.location.reload();
    } else {
      localStorage.setItem('All Data', (firstStoredData))
    }
  }

  const storeFilter = () => {
    if(eachOption === null){
      localStorage.setItem('Each Option', JSON.stringify('Most Upvotes'))
    } else {
      localStorage.setItem('Each Option', eachOption)
    }
  }

  React.useEffect(() => {
    getData();
    filterData(colorBtn) //eslint-disable-next-line
  }, [])

  const filterData = (id:string) => {
    const filteredData = allData.filter((item:datas) => {
        if(id.toLowerCase() === 'all'){
          return item;
        } else {
          return item.category === id.toLowerCase();
        }
    })
    setMainData(filteredData)
    setNoFeedBack(id)
    btnColor(id)
  }



 const upvotesComments = (event:React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLElement;
    const value = target.innerText;
    const newData = [...mainData];
    if(value === 'Most Upvotes'){
      const mostUpvotes = newData.sort((a:datas, b:datas) => b.upvotes - a.upvotes)
      setMainData(mostUpvotes)
    }

    if(value === 'Least Upvotes'){
      const leastUpvotes = newData.sort((a:datas, b:datas) => a.upvotes - b.upvotes)
      setMainData(leastUpvotes)
    }

    if(value === 'Most Comments'){
      const mostComments = newData.sort((a:datas, b:datas) => b.comments.length - a.comments.length)
      setMainData(mostComments)
    }

    if(value === 'Least Comments'){
      const leastComments = newData.sort((a:datas, b:datas) => a.comments.length - b.comments.length)
      setMainData(leastComments)
    }
 }

 const dataCount = ():number => {
   return mainData.length;
 }


 let customData = {
  customContainer: 'selectDropdownContainer',
  customTopText: 'selectTopText',
  customContent: 'selectDropdownContent',
  customDropDown: 'selectDropdown',
  customOption: 'Most Upvotes',
  customHeader: 'Sort By:',
  option:'eachOption',
  img: Up
}

 
  return (
    <section className="homeContainer">
      <section className="homeTopBarContainer">
        <TopBar feedbackData = {mainData} filterData={filterData} noFeedBack="" />
      </section>

      <section className="homeSuggestionsFeeedbackContainer">
        <SuggestionsBar upvotesComments={upvotesComments} dataCount={dataCount} customData={customData} />
        <FeedBacks feedbackData= {mainData} filterData={filterData} noFeedBack={noFeedBack} />
    </section>
    </section>
  )
}

export default Home
