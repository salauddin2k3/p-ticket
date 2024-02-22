

// single-ticket >>>>> for every single ticket using this "class"

// selected-ticket-id


// const allTickets = document.getElementsByClassName("single-ticket");

// for (const ticket of allTickets){
//     ticket.addEventListener('click', function(event){
//         const ticketName = event.target.innerText;

//         const testP = document.getElementById("test-ticketing");
//         testP.innerText = ticketName;
//     })
// }



// Select Your Seat added, click to seat, added 3 information, (seat name, seat class & seat price)

const allTickets = document.getElementsByClassName("single-ticket");

for (const ticket of allTickets){
    ticket.addEventListener('click', function(event){
        const ticketName = event.target.innerText;

        const selectedContainer = document.getElementById("selected-ticket-id");

        const perSeatPrice = document.getElementById("per-seat-price").innerText;
        console.log(perSeatPrice);

        const div = document.createElement("div");
        // div style..............
        div.classList.add("single-div-style");

        const p1 = document.createElement("p");
        // p1 style.....
        p1.classList.add("single-ticket-style");
        
        const p2 = document.createElement("p");
        // p2 style.....
        p2.classList.add("single-ticket-style");

        const p3 = document.createElement("p");
        // p3 style.....
        p3.classList.add("single-ticket-style");

        p1.innerText = ticketName;
        p2.innerText = "Economy";
        p3.innerText = perSeatPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(perSeatPrice);
    })
}


// Create function for added total cost value

function updateTotalCost (value) {
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}


// Any string convert to number using function

function getConvertedValue (id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}