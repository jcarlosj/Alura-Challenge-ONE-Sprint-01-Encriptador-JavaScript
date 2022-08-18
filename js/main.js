const code = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'ó': 'ober',
    'u': 'ufat'
};

const 
    anio = document.querySelector( '.anio' ),
    btnEncrypt = document.querySelector( '.btn-encrypt' ),
    btnDecrypt = document.querySelector( '.btn-decrypt' ),
    btnCopy = document.querySelector( '.btn-copy' ),
    textareaEl = document.querySelector( '#textarea' ),
    defaultEl = document.querySelector( '.aside-content .show-default' ),
    resultEl = document.querySelector( '.aside-content .show-result' ),
    pResultEl = document.querySelector( '.result' ),
    pInfoEl = document.querySelector( '.info' ); 

anio.innerHTML = new Date().getFullYear();

btnEncrypt.addEventListener( 'click', () => {
    const message = textareaEl.value;

    if( validateString( message ) ) {
        hideDefaultElement();
        encrypt( message );
        // console.log( 'Click Encrypt' );
    }
});

btnDecrypt.addEventListener( 'click', () => {
    const message = textareaEl.value;

    if( validateString( message ) ) { 
        decrypt( message );
        hideDefaultElement();
        // console.log( 'Click Decrypt' );
    }

});

btnCopy.addEventListener( 'click', () => {
    const cb = navigator.clipboard;
    cb
        .writeText( pResultEl.innerText )
        .then( () => console.log( 'Text copied!' )
    );
});

function decrypt( message ) {
    /* Itera el objeto que contiene la traduccion (code) */
    for( let [key, value] of Object.entries( code ) ) {
        message = message.replaceAll( value, key );
    }

    pResultEl.innerHTML = message;
}

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

function validateString( string ) {
    if( ! string ) {
        pInfoEl.style.display = 'flex';
        pInfoEl.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';

        return false;
    }
    else if( isUpperCase( string ) || hasSpecialChar( string ) ) {
        pInfoEl.style.display = 'flex';
        pInfoEl.innerHTML = 'Solo letras minúsculas y sin acentos';

        return false;
    }

    pInfoEl.style.display = 'none';
    pInfoEl.innerHTML = '';

    return true;
}

function isUpperCase( string ) {
    for ( let i = 0; i < string.length; i++ ) {
        if ( string.charAt( i ) == string.charAt( i ).toUpperCase() && string.charAt( i ).match( /[a-z]/i ) ) {

            return true;
        }
    }

    return false;
};

function hasSpecialChar(str) {
    const specialChars = /[áàãâéèêíìîõóòôúùû`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return specialChars.test(str);
}