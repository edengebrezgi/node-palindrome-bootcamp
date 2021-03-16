console.log("hi");   
document.querySelector('button').addEventListener('click', clicky)
function clicky(element){
  let input = document.querySelector('input').value.toLowerCase()
  fetch(`/funStuff?input=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    document.querySelector('.results').innerText =  document.querySelector('input').value + " " + data.isPalindrome
    })
}

// Jerry helped me with this code.