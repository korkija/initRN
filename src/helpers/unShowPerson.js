export const unShowPersonOnList = (peopleList,notShow) => {
    return peopleList.filter(item =>{
        return !notShow.find(itemIn => item.id === itemIn);
        }
    )
};
