
export interface select {
    id:number,
    option:string
}

export const selectData:select[] = [
    {
        id:1,
        option: 'Most Upvotes'
    },

    {
        id:2,
        option: 'Least Upvotes'
    },

    {
        id:3,
        option: 'Most Comments'
    },

    {
        id:4,
        option: 'Least Comments'
    }
]

export const updateSelectData:select[] = [
        {
            id:1,
            option: 'Suggestion'
        },
    
        {
            id:2,
            option: 'Planned'
        },
    
        {
            id:3,
            option: 'In-progress'
        },
    
        {
            id:4,
            option: 'Live'
        } 
]