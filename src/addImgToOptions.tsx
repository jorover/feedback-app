


export const addImg = (innerText:string) => {
    const allItems = document.querySelectorAll<HTMLParagraphElement>('.innerEachOption')
    allItems.forEach((item:HTMLParagraphElement) => {
        if(item.innerText.toLowerCase() === innerText.toLowerCase()){
            item.parentElement?.classList.add('selectImg')
        }
    })
}

