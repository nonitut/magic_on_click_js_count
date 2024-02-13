document.addEventListener("DOMContentLoaded", function() {
    // let myBox = document.getElementById('myBox');
    // let clickCount = 0;
    
    // myBox.addEventListener('click', function() {
    //     clickCount++;
    
    //     if (clickCount === 3) {
    //         myBox.style.backgroundColor = 'blue';
    //     } else if (clickCount === 5) {
    //         myBox.style.backgroundColor = 'orange';
    //     }
    // });
    // let images = document.querySelectorAll('.myImage');
    // let Count = 0;
    
    // images.forEach(function(image) {
    //     image.addEventListener('click', function() {
    //         Count++;
    //         if (Count === 1) {
    //             image.classList.add('animal');
    //             Count = 0; 
    //         }
    //     });
    // });
    
    let images = document.querySelectorAll('.myImage');
    let Count = 0;
    
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            Count++;
            if (Count === 1) {
                image.classList.add('animal'); 
                Count = 0; 
            }
        });
    });
    

    
    
    

});

