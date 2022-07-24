import React from 'react'
import { headerCategory } from './HeadersList'
import { Hlist }  from '../src/Hlist'
import { datas } from './datalist'

interface headerList{
  headerlistContainer:string,
  headerCategorry:string,
  feedbackValues:datas[],
  filterData:Function
}


const HeaderList:React.FC<headerList> = ( { headerlistContainer, headerCategorry, feedbackValues, filterData }:headerList ) => {


  return (
    <section className={headerlistContainer}>
        {
          headerCategory.map((item:Hlist) => {
            const {id, category} = item;
            return <article key={id} className={headerCategorry}>
                <button className={item.class} id="list-btn" onClick={()=> filterData(category)}> {category} </button>
            </article>
          })
        }
    </section>
  )
}

export default HeaderList