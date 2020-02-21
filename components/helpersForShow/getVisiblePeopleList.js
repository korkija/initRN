export const getVisiblePeopleList = (state) => {
    const {people,notShow} = state;
    return people.filter(item =>{
        return !notShow.find(itemIn => item.id === itemIn);
        }
    )
};
