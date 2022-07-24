

export const addRemoveClassList = (urlOne:string, urlTwo:string, urlThree:string, num:number) => {
    document.body.classList.remove(urlTwo, urlThree)
    document.body.classList.add(urlOne)
    roadMaps(num);
}


const roadMaps = (num:number) => {
    const roadmaps = document.querySelectorAll<HTMLSelectElement>('.innerRoadMapDisplayContent');
    const roadCounter = document.querySelectorAll<HTMLElement>('.roadMapCounter')
    const roadCounting = [roadCounter[7], roadCounter[9], roadCounter[11]]
    clearItems(roadmaps, 'firstArray')
    clearItems(roadCounting, 'secondArray')
    roadmaps[num].style.width = '100vw'
    roadmaps[num].style.padding = '20px'
    roadCounting[num].style.display = 'block'
    roadCounting[num].style.position = 'absolute'
    roadCounting[num].style.left = '20px'
    roadmaps[num].style.marginTop = '100px'


}

const clearItems = (items:NodeList | HTMLElement[], test:string) => {

    if(test === 'firstArray'){
        items.forEach((item:any)=> {
            item.style.width = '0vw'
            item.style.padding = '0px'
        })

    } else {
        items.forEach((item:any)=> {
            item.style.display = 'none'
        })
    }
}