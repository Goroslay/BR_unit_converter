const convertirDe = document.getElementById('convertirDe')
const convertirA = document.getElementById('convertirA')
const altura=document.getElementById('botonAltura')
const temperatura=document.getElementById('botonTemperatura')
const peso=document.getElementById('botonPeso')
const formulario = document.getElementById('formulario')
const resultado = document.getElementById('resultado')
const entrada = document.getElementById('unidad')
const reset = document.getElementById('formularioReset')

altura.addEventListener('click',(e)=>{
    e.preventDefault()
    formulario.querySelector('label').textContent='Ingrese la altura a convertir:'
    convertirDe.innerHTML=`<option value="centimetros">centimetros</option>
                    <option value="metros">metros</option>
                    <option value="pulgadas">pulgadas</option>
                    <option value="pies">pies</option>`
    convertirA.innerHTML=`<option value="centimetros">centimetros</option>
                    <option value="metros">metros</option>
                    <option value="pulgadas">pulgadas</option>
                    <option value="pies">pies</option>`
})

temperatura.addEventListener('click',(e)=>{
    e.preventDefault()
    formulario.querySelector('label').textContent='Ingrese la temperatura a convertir:'
    convertirDe.innerHTML=`<option value="celcius">celcius</option>
                    <option value="farenheit">farenheit</option>
                    <option value="kelvin">kelvin</option>`
    convertirA.innerHTML=`<option value="celcius">celcius</option>
                    <option value="farenheit">farenheit</option>
                    <option value="kelvin">kelvin</option>`
})

peso.addEventListener('click',(e)=>{
    e.preventDefault()
    formulario.querySelector('label').textContent='Ingrese el peso a convertir:'
    convertirDe.innerHTML=`<option value="kilogramo">kilogramo</option>
                    <option value="tonelada">tonelada</option>
                    <option value="onza">onza</option>
                    <option value="libra">libra</option>`
    convertirA.innerHTML=`<option value="kilogramo">kilogramo</option>
                    <option value="tonelada">tonelada</option>
                    <option value="onza">onza</option>
                    <option value="libra">libra</option>`
})


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let conversion
    const simbolo={
        'celcius':'°C','farenheit':'°F','kelvin':'K',
        'centimetros':'cm','metros':'m','pulgadas':'in','pies':'ft',
        'kilogramo':'kg','tonelada':'t','onza':'oz','libra':'lb'
    }
    const valor = Number(entrada.value)
    if(formulario.querySelector('label').textContent === 'Ingrese la temperatura a convertir:'){
        switch (convertirDe.value) {
            case 'celcius':
                conversion = convertirA.value === 'celcius' ? valor
                            : convertirA.value === 'farenheit' ? (valor * 9/5)+32
                            : valor + 273.15
                break;
            case 'farenheit':
                conversion = convertirA.value === 'celcius' ? (valor-32)*5/9
                            : convertirA.value === 'farenheit' ? valor
                            : (valor-32)*5/9 + 273.15
            
            break;

            case 'kelvin':
                conversion = convertirA.value === 'celcius' ? valor - 273.15
                            : convertirA.value === 'farenheit' ? (valor-273.15)*9/5+32
                            : valor
            break;    
        }
    }

    if(formulario.querySelector('label').textContent === 'Ingrese la altura a convertir:'){
        switch (convertirDe.value) {
            case 'centimetros':
                conversion = convertirA.value === 'metros' ? valor/100
                            : convertirA.value === 'pulgadas' ? valor/2.54
                            : convertirA.value === 'pies' ? valor/30.48
                            : valor
                break;
            case 'metros':
                conversion = convertirA.value === 'metros' ? valor
                            : convertirA.value === 'pulgadas' ? valor * 39.3701
                            : convertirA.value === 'pies' ? valor * 3.28084
                            : valor*100
            
            break;

            case 'pulgadas':
                conversion = convertirA.value === 'metros' ? valor * 0.0254
                            : convertirA.value === 'pulgadas' ? valor
                            : convertirA.value === 'pies' ? valor/12
                            : valor * 2.54
            break;
            
            case 'pies':
                conversion = convertirA.value === 'metros' ? valor * 0.3048
                            : convertirA.value === 'pulgadas' ? valor * 12
                            : convertirA.value === 'pies' ? valor
                            : valor * 30.48
            break; 
        }
    }

    if(formulario.querySelector('label').textContent === 'Ingrese el peso a convertir:'){
        switch (convertirDe.value) {
            case 'kilogramo':
                conversion = convertirA.value === 'tonelada' ? valor/1000
                            : convertirA.value === 'onza' ? valor* 35.274
                            : convertirA.value === 'libra' ? valor* 2.20462
                            : valor
                break;
            case 'tonelada':
                conversion = convertirA.value === 'tonelada' ? valor
                            : convertirA.value === 'onza' ? valor* 35274
                            : convertirA.value === 'libra' ? valor* 2204.62
                            : valor*1000    
            break;

            case 'onza':
                conversion = convertirA.value === 'tonelada' ? valor/ 35274
                            : convertirA.value === 'onza' ? valor
                            : convertirA.value === 'libra' ? valor/16
                            : valor/ 35.274
            break;
            
            case 'libra':
                conversion = convertirA.value === 'tonelada' ? valor/2204.62
                            : convertirA.value === 'onza' ? valor* 16
                            : convertirA.value === 'libra' ? valor
                            : valor/2.20462
            break; 
        }
    }

    resultado.innerText=`${conversion.toFixed(2)} ${simbolo[`${convertirA.value}`]}`

})


reset.addEventListener('submit',(e)=>{
    e.preventDefault()
    resultado.innerText=''
    entrada.value=''
})