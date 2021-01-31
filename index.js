
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


const quarterOf = (month) => {

 
    if (month > 0 && month < 4) {
        //jan, feb, mar 
        // 1 - 3
        return 1;

    }

    else if (month > 3 && month < 7) {
        //apr, may, jun
        // 4 - 6
        return 2;

    }

    else if (month > 6 && month < 10) {
        //jul, aug, sept
        // 7 - 9
        return 3;

    }

    else if (month > 9 && month < 13) {
        //oct, nov, dec
        // 10 - 12
        return 4;

    }

    else {

        return "enter a number from 1 - 12";
    }

}

console.log(quarterOf(9));






