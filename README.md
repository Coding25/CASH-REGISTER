# CASH-REGISTER
Cash Register is a machine used for calculating and recording financial transactions. 
Designed a cash register drawer function CashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument which is a 2D array listing available currency.
The checkCashRegister() function returns an object with a status key and a change key.
Returns {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or cannot return the exact change.
Returns {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Returns {status: "OPEN", change: [...]}, with the change in coins and bills, sorted in highest to lowest order and value of the change key.
