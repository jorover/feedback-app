

export const btnColor = (id:string) => {
        const topBtn = document.querySelectorAll<HTMLElement>('#list-btn');
        Array.from(topBtn, (item:HTMLElement) => {
          if(item.innerText.toLowerCase() === id.toLowerCase()){
            colorReset();
            return item.parentElement?.classList.add('addColorBtn')
          }
      
          return item;
        })

        localStorage.setItem('list Btn', JSON.stringify(id.toLowerCase()))
    
      }

      
      
      
       const colorReset = () => {
        const topBtn = document.querySelectorAll<HTMLElement>('#list-btn');
        Array.from(topBtn, item => {
          return item.parentElement?.classList.remove('addColorBtn')
        })
        
       }