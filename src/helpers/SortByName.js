
export const sortByName =(people)=> {
    // console.log('sortByName+people');
    // console.log(people);
    return people.sort(function (a, b) {
        if (a.first_name[0] < b.first_name[0]) //сортируем строки по возрастанию
            return -1;
        if (a.first_name[0] > b.first_name[0])
            return 1;
        return 0;
    });
};
