import { baseUrl } from "./baseurl/books.js";
window.onload=()=>{
    getData()
}
let form= document.getElementById("form";
    form.addEventListener("submit",async function(){
        event.preventDefault();
        let title = form.title.value;
        let author = form.author.value;
        let category = form.category.value;
        let Availability status = form.Availability status.value;
        let Borrowed  = form.Borrowed.value;
        let booksobj =
            {
                "title": "Book Title",
                "author": "Author Name",
                "category": "Fictional",
                "isAvailable": true,
                "isVerified": false,
                "borrowedDays": null,
                "imageUrl": "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
              };
              try{
                await fetch (`${baseUrl}/books`,{
                    method:"POST",
                    headers{
                        "content-type":books/json"
                    },
                    body :JSON.stringify(booksobj),
                });
                alert("Book Added Successfully");
                form.reset ();
              }catch{
                alert("");
               
              }
              
        
    })

)