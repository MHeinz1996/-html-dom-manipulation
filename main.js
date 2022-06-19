function replaceImages() {
    // get all img tags from the document and store them in a const
    const images = document.body.getElementsByTagName('img');

    /* cycle through each image from the end. This is because if you
    cycle from the front, removing the first image would cause the 
    list to lose its first element so that the second time the loop 
    repeats, where i is 1, it would stop because the length of the 
    collection is now also 1.*/
    for(let i = images.length-1; i>=0; i--) {
        // isolate each image obj
        let image = images[i];
        if (image.alt) {
            console.log(image.alt)

            // create a text node containing the text in the alt portion of the img
            let text = document.createTextNode(image.alt)

            // allow the parent node of img to replace its child (image) with another child(text)
            image.parentNode.replaceChild(text, image);
        }
    }
}