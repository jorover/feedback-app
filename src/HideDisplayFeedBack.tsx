

export const displayFeedBack = () => {
    if(document.body.classList.contains('openFeed')){
        document.body.classList.remove('openFeed')
    } else {
        document.body.classList.add('openFeed')
    }
}