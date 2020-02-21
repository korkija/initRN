import {sortPeopleByName} from "../../store/helpers/sortPeopleByName";
import {getVisiblePeopleList} from "./getVisiblePeopleList";

export const getFilterList = (state) => {
    const {name, ageMinFilter:ageMin, ageMaxFilter:ageMax, genderChoose} = state;
    const dateNow = (new Date(Date.now())).getFullYear();
    const dateMin = dateNow - (ageMin);
    const dateMax = dateNow - (ageMax);
    return sortPeopleByName(getVisiblePeopleList(state)).filter(item => {
        if (item.show === undefined) {
            const itemYears = (new Date(item.dob)).getFullYear();
            if (genderChoose === "both") {
                return (itemYears <= dateMin)
                    && (itemYears >= dateMax)
                    && (`${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`.indexOf(name.toLowerCase()) > -1)
            } else {
                return (item.gender === genderChoose)
                    && (itemYears <= dateMin)
                    && (itemYears >= dateMax)
                    && (`${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`.indexOf(name.toLowerCase()) > -1)
            }
        } else {
            return false;
        }
    });
};
