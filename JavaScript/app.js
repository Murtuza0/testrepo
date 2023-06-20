function table() {
    const tableNumber = parseInt(prompt("Enter Number", 5));
        for (let i = 1; i <= 10; i++) {
        // let counting = tableNumber + " x " +i+ " = " + tableNumber * i;
        let counting = (`${tableNumber} x ${i} = ${tableNumber * i}`);
        // console.log(counting);
        document.write("<div>");
        document.write(counting);
        document.write("</div>");
    };
};

