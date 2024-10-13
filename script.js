//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];


const sortBands = (bands) => {
    return bands.sort((a, b) => {
        const strippedA = a.replace(/^(a |an |the )/i, '').toLowerCase();
        const strippedB = b.replace(/^(a |an |the )/i, '').toLowerCase();
        return strippedA.localeCompare(strippedB);
    });
};


const sortedBands = sortBands(bands);
const bandList = document.getElementById('bands');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});