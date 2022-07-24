

export interface menu {
    hamburger:string,
    overlay:string
  }
  
export const menuOptions:menu = {
      hamburger: "hamburgerMenuContainer",
      overlay:"overlay"
}


export interface sideList{
    headerlistContainer:string,
    headerCategory:string,
    roadMapContainer:string,
    roadMapContent: 'roadMapContent'
}


export const sideListContent:sideList = {
    headerlistContainer: "sideListContainer",
    headerCategory: 'sideListCategory',
    roadMapContainer: 'sideRoadMapContainer sideRoadMapContent',
    roadMapContent: 'roadMapContent'
  }