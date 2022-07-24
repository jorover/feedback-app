import { datas } from "./datalist"
import { replaceItem } from "./SubmitForm"

export const addCommentReply = (allItems:datas) => {
    const newValues = {
        id: allItems.id,
        title: allItems.title,
        description: allItems.description,
        category: allItems.category,
        status: allItems.status,
        upvotes: allItems.upvotes,
        upVoted: allItems.upVoted,
        comments: allItems.comments
    }
    replaceItem(newValues)
}