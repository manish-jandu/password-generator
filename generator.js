function generate(){
    let dicitionary = '';
    const lowerCaseCheck = document.getElementById('lowerCaseCb').checked;
    const upperCaseCehck = document.getElementById('upperCaseCb').checked;
    const digitChecked = document.getElementById('digitsCb').checked;
    const specialChecked = document.getElementById('specialCb').checked;

    if(lowerCaseCheck){
        dicitionary += 'qwertyuiopasdfghjklzxcvbnm';
    }

    if(upperCaseCehck){
        dicitionary += 'QWERTYUIOPASDFGHJKLXZCVBNM';
    }

    if(digitChecked){
        dicitionary += '0123456789';
    }

    if(specialChecked){
        dicitionary += '!@#$%^&*()_+{}":<>?/[]';
    }

    const length = document.querySelector('input[type="range"]').value;

    if(length<=0 || dicitionary.length <= 0){
        return;
    }

    let password = ''
    for(let i=0;i<length;i++){
        const pass = Math.floor(Math.random() * dicitionary.length);
        password += dicitionary[pass];
    }

    document.querySelector('input[type="text"]').value = password;
}

[...document.querySelectorAll('input[type="checkbox"],button.generate')].forEach(elem=>{
    elem.addEventListener('click',()=>{
        generate();
    });
});
 
document.querySelector('input[type="range"]').addEventListener('input',ev=>{
    document.querySelector('div.range span').innerHTML = ev .target.value;
    generate();
})

document.querySelector('div.password button').addEventListener('click',copyToClipBoard);

function copyToClipBoard(){
    const copyBtn =  document.querySelector('div.password button');
    const pass = document.querySelector('div.password input').value;
    navigator.clipboard.writeText(pass).then(()=>{
       copyBtn.innerHTML = "Copied";
       setTimeout(()=>{
        copyBtn.innerHTML = "Copy";
       },1000);
    });
}

//default while loading
document.querySelector('div.range span').innerHTML = document.querySelector('input[type="range"]').value;