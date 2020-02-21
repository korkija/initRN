export const getVisiblePeopleList = (state) => {
    const {peopleList,notShow} = state;
    return peopleList.filter(item =>{
        return !notShow.find(itemIn => item.id === itemIn);
        }
    )
};
