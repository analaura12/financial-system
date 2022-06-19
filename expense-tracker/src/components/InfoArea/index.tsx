import * as C from './styles';
import {formatCurrentMonth} from '../../helpers/dateFilter';
import { parse } from 'path';

import {ResumeItem} from '../ResumeItem/index';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
};

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
    const handlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    const handleNextMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}></ResumeItem>
                <ResumeItem title="Despesas" value={expense}></ResumeItem>
                <ResumeItem title="Balanço"  value={income-expense}></ResumeItem>
            </C.ResumeArea>
        </C.Container>
    );
}