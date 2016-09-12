import * as strings from './strings';

export const toRna = (DNA) => {
    let RNA = '';

    for(let i = 0; i < DNA.length; i++){
        switch(DNA[i]) {
            case 'G':
                RNA += 'C';
                break;
            case 'C':
                RNA += 'G';
                break;
            case 'T':
                RNA += 'A';
                break;
            case 'A':
                RNA += 'U';
        }
    }

    return RNA;
};
