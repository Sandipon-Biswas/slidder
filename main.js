let photos = ["https://images.pexels.com/photos/2091399/pexels-photo-2091399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2449310/pexels-photo-2449310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
var imgTag = document.querySelector("img");
var i = 0;
function next(){
    if(i<photos.length -1){
        i++
    imgTag.src=photos[i];
    }else{
        i=0;
        imgTag.src=photos[i];
    }
};
function pre(){
    if(i>0){
        i--
    imgTag.src=photos[i];
    }else{
        i=photos.length-1;
        imgTag.src=photos[i];
    }
}