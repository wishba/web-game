const holdUp = () => document.getElementById('characterSprite').classList.add('character__sprite--up')
const releaseUp = () => document.getElementById('characterSprite').classList.remove('character__sprite--up')

const holdLeft = () => document.getElementById('characterSprite').classList.add('character__sprite--left')
const releaseLeft = () => document.getElementById('characterSprite').classList.remove('character__sprite--left')

const holdRight = () => document.getElementById('characterSprite').classList.add('character__sprite--right')
const releaseRight = () => document.getElementById('characterSprite').classList.remove('character__sprite--right')

const holdDown = () => document.getElementById('characterSprite').classList.add('character__sprite--down')
const releaseDown = () => document.getElementById('characterSprite').classList.remove('character__sprite--down')