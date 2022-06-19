import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth()}`
}

export const filterListByMonth = (list:  Item[], date: string): Item[] => {
    let newList: Item[] = [];
    console.log(date);
    let [year, month] = date.split('-');
    
    
    for (let i in list){
        console.log(month);
        if(
            list[i].date.getFullYear() === parseInt(year)
            && (list[i].date.getMonth()) === (parseInt(month)+1)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date: Date): string =>{
    let year  = date.getFullYear();
    let month = addZeroToDate(date.getMonth());
    let day = addZeroToDate(date.getDate());

    return `${day}/${month}/${year}`
}

const addZeroToDate = (n: number): string=> {
    if(n < 10){
        return `0${n}`;
    }else{
        return `${n}`;
    }
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) -1]} de ${year}`;
}