function cashRegister(price, cash, cid) {
    let totalcashInDrawer = 0;
    let change = cash - price;
    let changeArr = [];
    const currencyunit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    for (let i = 0; i < cid.length; i++) {
        totalcashInDrawer += cid[i][1];
    }
    if (change > totalcashInDrawer) {
        return { status: "INSUFFICIENT FUNDS", change: [] };
    }
    else if (change === totalcashInDrawer) {
        return { status: "CLOSED", change: cid };
    }
    else {
        cid.reverse();
        for (let i = 0; i < cid.length; i++) {
            const unitsvalue = currencyunit[cid[i][0]];
            const actualvalue = cid[i][1];
            let numberoftimes = change / unitsvalue;
            while (numberoftimes > 1) {
                changeArr.push(cid[i][0], change);
                numberoftimes--;
            }
        }
    }
    console.log(changeArr);
}

cashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
