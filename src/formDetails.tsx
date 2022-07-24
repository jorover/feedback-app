

export const addForm = {
    width: "56",
    height: "56",
    cx: "28",
    cy: "28",
    r: "28",
    d:"M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z",
    headerText: "Create New Feedback",
    inputLabel: "Feedback Title",
    inputSmall: "Add a short, descriptive headline",
    selectLabel: "Category",
    selectSmall: "Choose a category for your feedback",
    textAreaLabel: "Feedback Detail",
    textAreaSmall: "Include any specific comments on what should be improved, added, etc.",
    deleteBtn : {
      delBtn:false
    },
    update:false,
    addContent: "Add Feedback",
    inputClass: 'addFormClass',
    textAreaClass: 'addFormClass'
  }


export const editForm = {
    width: "40",
    height: "40",
    cx: "20",
    cy: "20",
    r: "20",
    d:"M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z",
    headerText: "Editing Feedback",
    inputLabel: "Feedback Title",
    inputSmall: "Add a short, descriptive headline",
    selectLabel: "Category",
    selectSmall: "Choose a category for your feedback",
    updateLabel: "Update Status",
    updateSmall: "Change Feature State",
    textAreaLabel: "Feedback Detail",
    textAreaSmall: "Include any specific comments on what should be improved, added, etc.",
    deleteBtn : {
      mainBtn: "btn",
      btnPrimary: "",
      content:"Delete",
      delBtn:true
    },
    update:true,
    addContent: "Save Changes",
    inputClass: 'editFormClass',
    textAreaClass: 'editFormClass'
  }