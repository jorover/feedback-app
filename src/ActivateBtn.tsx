

export const activateBtn  = (text:string, input:string) => {
    const allBtn = document.querySelectorAll<HTMLButtonElement>('.btn');
    const textInput = document.querySelector(input) as HTMLTextAreaElement;
    allBtn.forEach(item => {
        if(item.innerText === text && (textInput?.value.length >=1 && textInput?.value.length <=250)){
            item.parentElement?.classList.add('displayBtn')
        } else {
            item.parentElement?.classList.remove('displayBtn')
        }
    })

    charactersCount(textInput?.value.length)

}

export const eachReplyBtn = () => {
    const allBtn = document.querySelectorAll<HTMLButtonElement>('.reply-btn');
    const allTextArea = document.querySelectorAll<HTMLTextAreaElement>('.addNewReply');
    for (let index = 0; index < allTextArea.length; index++) {
      const element = allTextArea[index];
      const btn = allBtn[index]

      element.addEventListener('keyup', ()=> {
          if(element.value.length >=1){
            btn.parentElement?.classList.add('displayBtn')
          } else {
            btn.parentElement?.classList.remove('displayBtn')
          }
  
      })
     
    }

}

const charactersCount = (input:number) => {
  const count:Object | any = document.querySelector<HTMLParagraphElement>('.characters')
  let newCount = 250;
  let newNum = input >= 250 ? 250 : input
  newCount = newCount - newNum;
  count.innerText = `${newCount < 0 ? 0 : newCount} ${newCount <= 0 ? 'character' : 'characters'} left`

  errorMsg(newCount, count)
}

const errorMsg = (newCount:number, count:Object | any) => {
  if(newCount === 0){
    count.style.color = 'red'
  } else {
    count.style.color = '#000'
  }
}
