const atbash = str => {
    let dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let length = dictionary.length - 1;

    return Array.prototype.map.call(str, (letter) => (
        dictionary[length - dictionary.indexOf(letter)]
    )).join('');
};

export default atbash;
