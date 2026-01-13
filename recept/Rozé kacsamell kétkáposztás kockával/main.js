
// Hozzávalók mennyiségének dinamikus frissítése az adagok számának változtatásakor
const alapHozzavalok = [
    { alap: , egyseg: '', szoveg: '' },
    { alap: , egyseg: '', szoveg: '' },
    { alap: , egyseg: '', szoveg: '' },
    { alap: , egyseg: '', szoveg: '' },
    { alap: , egyseg: '', szoveg: '' },
    { alap: , egyseg: '', szoveg: 'chili' },
    { alap: , egyseg: '', szoveg: 'szójaszósz' },
    { alap: , egyseg: '', szoveg: 'halszósz' },
    { alap: , egyseg: '', szoveg: 'közepes újhagyma' },
    { alap: , egyseg: '', szoveg: 'koriander ízlés szerint' },
    { alap: , egyseg: '', szoveg: 'cukor' },
    { alap: , egyseg: '', szoveg: 'hal alaplé' }
];

let adag = 1;

function updateHozzavalok() {
    const ul = document.querySelector('.hozzavalok ul');
    if (!ul) return;
    ul.innerHTML = '';
    alapHozzavalok.forEach(h => {
        let mennyiseg = h.alap !== null ? h.alap * adag : '';
        let egyseg = h.egyseg ? h.egyseg + ' ' : '';
        let szoveg = mennyiseg ? `${mennyiseg} ${egyseg}${h.szoveg}` : `${h.szoveg}`;
        const li = document.createElement('li');
        li.textContent = szoveg;
        ul.appendChild(li);
    });
}

function increase() {
    adag++;
    document.getElementById('count').textContent = adag;
    updateHozzavalok();
}

function decrease() {
    if (adag > 1) {
        adag--;
        document.getElementById('count').textContent = adag;
        updateHozzavalok();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateHozzavalok();
});

