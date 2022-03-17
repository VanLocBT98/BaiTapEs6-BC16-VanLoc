const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
 function innerData(){
    let arrInput = $$('#signup-form input, #signup-form select ,#signup-form textarea');
    console.log(arrInput)

    let inFo = []
    for(let input of arrInput){
        let {id,value,name} = input;
        inFo = {...inFo,[name]:value}
    }
    console.log(inFo)
    let htmls = '';
    for(let key in inFo){
        htmls +=`
            <div>
            <p>${key} : <span>${inFo[key]}</span></p>
            
            </div>
            `
    }
    $('.donate-us').innerHTML = htmls;
}
// 
 let btn = $('#signup-form .actions ul li:last-child a');
 btn.addEventListener('click',function(){
    innerData()
 })