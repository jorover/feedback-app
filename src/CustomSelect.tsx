import React, { FormEvent } from 'react'
import { select } from './selectData'
import Mark from '../src/mark.png'
import {customList} from './customDataList'

interface updateData {
    upDateData:Function,
    selectData:select[],
    customData:customList
}

const CustomSelect:React.FC<updateData> = ( {upDateData, customData, selectData}:updateData ) => {
    const [option, setOption] = React.useState(customData.customOption)

    const addDropdown = (event:React.FormEvent<EventTarget>) => {
       const target = event.target as HTMLElement;
       const addClassItem = target.parentElement;

       if(target.classList.contains('innerSelectDropdownContainer')){
            dropDown(target)
       } else {
            dropDown(addClassItem)
       }     
    }


    const dropDown = (target:any) => {
        if(target.classList.contains('dropDown')){
            target.classList.remove('dropDown')
        } else{
            target.classList.add('dropDown')
        }
    }

    const addImage = (event:React.FormEvent<EventTarget>, options:string) => {
        const target = event.target as HTMLElement;
        removeImgClass();
        target.parentElement?.classList.add('selectImg')
        changeOptionTitle(event, options)
        upDateData(event)
        storeData(target, options)
        target.parentElement?.parentElement?.parentElement?.parentElement?.classList.remove('dropDown');
        target.parentElement?.parentElement?.parentElement?.classList.remove('dropDown');

    }

    const removeImgClass = () => {
        const allItems = document.querySelectorAll(`.${customData.customDropDown}`)
        allItems.forEach(item => {
            item.classList.remove('selectImg')
        })
    }

    const changeOptionTitle = (event:React.FormEvent<EventTarget>, options:string) => {
        const target = event.target as HTMLElement;
        const targetVal = target.parentElement?.parentElement?.parentElement?.querySelector('#customOption') as HTMLElement;
        if(!target.classList.contains('eachOption')){
            targetVal.innerText = options.toLowerCase()
        } else {
            setOption(options)
        }
    }

    const storeData = (target:HTMLElement, options:string) => {
        if(!target.classList.contains('eachOption')){
            return;
        } else {
            localStorage.setItem('Each Option', JSON.stringify(options))
        }
    }

    React.useEffect(() => {
        const selectItems = () => {
            const items = document.querySelectorAll('.eachOption');
            const eachOption:string | null = localStorage.getItem('Each Option') as string
            
            items.forEach((item:any) => {
                if(item.innerText === JSON.parse(eachOption === null ? 'Most Upvotes' : eachOption) && item.classList.contains('eachOption')){
                    removeImgClass()
                    item.parentElement.classList.add('selectImg')
                    setOption(JSON.parse(eachOption))
                } else {
                    return;
                }
            })
        }

        selectItems() //eslint-disable-next-line 
    }, [])
  return (
    <article className={customData.customContainer} onClick={(e:FormEvent)=> addDropdown(e) }>
        <article className={customData.customTopText}>
            <h4> {customData.customHeader} </h4>
            <h4 id={customData.customOption === '' || 'feature' ? 'customOption': 'noCustomOption'}> {option} </h4>
            <img src={customData.img} alt="arrowUp-logo" />
        </article>
        <article className={customData.customContent}>
            {
                selectData.map((item:select) => {
                    return(
                        <article key={item.id} className={customData.customDropDown}>
                            <p className={customData.option} onClick={(e:FormEvent)=> addImage(e, item.option)}> {item.option} </p>
                            <img src={Mark} alt="checkmark-logo" className="selectImgIcon" />
                        </article>
                    )
                })
            }
        </article>
    </article>
  )
}

export default CustomSelect