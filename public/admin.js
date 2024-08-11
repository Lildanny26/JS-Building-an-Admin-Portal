
// Your Code Here

// used this area to write down the code for part 2

// let response = await fetch ('http://localhost:3001/updateBook', {
//     method: "PATCH",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//         "id": 3,
//         "title": "Legends of Arathrae",
//     }),
// });
// let updateBook = await response.json();
// console.log(updateBook)

// end of part 2

/* start of part 3 */
console.log("hi"); /* testing log */

async function main () {
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json();
    books.forEach(renderBook);
}

function renderBook(book) {
    let root = document.querySelector('#root');

    let li = document.createElement('li');
    li.textContent = book.title;

    let quantityInput = document.createElement('input');
    quantityInput.value = book.quantity;

    let saveButton = document.createElement('button');
    saveButton.textContent = 'save';

    saveButton.addEventListener('click', () =>{
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton);

    root.append(li);
}

main();