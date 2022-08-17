const code = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const 
    btnEncrypt = document.querySelector( '.btn-encrypt' ),
    btnDecrypt = document.querySelector( '.btn-decrypt' ),
    btnCopy = document.querySelector( '.btn-copy' ),
    textareaEl = document.querySelector( '#textarea' ),
    defaultEl = document.querySelector( '.aside-content .show-default' ),
    resultEl = document.querySelector( '.aside-content .show-result' ),
    pResultEl = document.querySelector( '.result' ); 

btnEncrypt.addEventListener( 'click', () => {
    const message = textareaEl.value;

    hideDefaultElement();
    encrypt( message );
    // console.log( 'Click Encrypt' );
});

btnDecrypt.addEventListener( 'click', () => {
    console.log( 'Click Decrypt' );
    hideDefaultElement();
});

function encrypt( message ) {
    const arrWord = message.split( '' );        // Separa cada letra de la palabra en un array

    /* Itera el objeto que contiene la traduccion (code) */
    for( let [key, value] of Object.entries( code ) ) {
        // console.log( key + ' =  ' + value ); 
        /* Itera el arrat de las letras de la palabra */
        for( let j = 0; j < arrWord.length; j++ ) {
            if( key === arrWord[ j ] ) {
                arrWord[ j ] = value;
            }
        }
    }

    console.log( arrWord );
    pResultEl.innerHTML = arrWord.join( '' );
}

function hideDefaultElement () {
    defaultEl.style.display = 'none';
    resultEl.style.display = 'flex';
}



// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`