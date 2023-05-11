/**
 * В цепочках ДНК символы «А» и «Т» дополняют друг друга, 
 * как «С» и «G». Ваша функция получает одну сторону ДНК 
 * (строка, кроме Haskell); вам нужно вернуть другую 
 * дополнительную сторону. Нить ДНК никогда не бывает 
 * пустой или ДНК вообще не существует (опять же, кроме Haskell).
 *   ввод        вывод
 * "ATTGC" --> "TAACG"
 * "GTAT" --> "CATA"
 */

function DNAStrand(dna){
    let result = ''; 
    const genom = {
        gens: { 'A':'T', 
                'T':'A',
                'G':'C',
                'C': 'G',
            },
        getPair(g){
            return this.gens[g];
        }
    };
    [...dna].forEach(e => {
        result += genom.getPair(e.toUpperCase());
    });
    return result;
}