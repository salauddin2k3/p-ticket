

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

for (const ticket of allTickets) {
    ticket.addEventListener('click', function (event) {
        const ticketName = event.target.innerText;

        const selectedContainer = document.getElementById("selected-ticket-id");

        const perSeatPrice = document.getElementById("per-seat-price").innerText;
        console.log(perSeatPrice);


        // Up to 4 seat selected function

        if (getConvertedValue("seat-count") + 1 > 4) {
            alert("You can't select up to four seat");
            return;
        }

        // one click per seat & disabled

        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";

        // If selected seat over 40

        if (getConvertedValue("seat-left") - 1 < 0) {
            alert("All seat Selected");
            return;
        }


        // Cart or Seat Count

        const cartCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = cartCount + 1;



        // Seat Left

        const seatLeft = getConvertedValue("seat-left");
        document.getElementById("seat-left").innerText = seatLeft - 1;




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

        // Call update total cost
        updateTotalCost(perSeatPrice);

        // Call Grand Total
        updateGrandTotal()
    })
}

// Update total Grand Cost Function

function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");

    if (status == undefined) {
        document.getElementById("grand-total").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;

        if (couponCode == "NEW15") {
            const discountedOne = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost - discountedOne;
        }
        else if (couponCode == "Couple 20") {
            const discountedTwo = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost - discountedTwo;
        }
        else {
            alert("Please enter a valid coupon code");
        }
    }
    document.getElementById("coupon-code").value = "";
}


// Create function for added total cost value

function updateTotalCost(value) {
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}


// Any string convert to number using function

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}



// Disabled next btn

document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('inputField');
    const submitButton = document.getElementById('submitButton');

    inputField.addEventListener('input', function () {
        if (inputField.value.trim() !== '') {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});






