document.addEventListener('DOMContentLoaded', function () {
    GetAdvice();
});


const Advice = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Ocurrio un error en los datos");
    }
}

const GetAdvice = async () => {
    try {
        //OBTENEMOS EL NUMERO DEL CONSEJO
        let num = document.getElementById('adviceNumber');
        //OBTENEMOS EL CONTENDOR DEL CONSEJO
        let textAdvice = document.getElementById('advice');
        //LIMPIAMOS LO QUE TENGA
        textAdvice.innerHTML = '';
        num.innerHTML = '';
        //LE PONEMOS EL NUEVO CONSEJO
        //HACEMOS LA PETICION DE UN CONSEJO
        Advice().then(res => {
            textAdvice.innerHTML = res.slip.advice;
            num.innerHTML = 'ADVICE #' + res.slip.id;
        });
    } catch (error) {
        console.error("error");
    }
}