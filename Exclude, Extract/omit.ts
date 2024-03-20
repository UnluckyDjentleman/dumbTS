//Omit<T,K> excepts fields associated with K keys from T 
type Elements='FIRE'|'EARTH'|'WATER'|'AIR'
type Character={
    name: string;
    element: Elements;
    levelToUnlock: number
}

type PlayableCharacter=Omit<Character, 'levelToUnlock'>
//type PlayableCharacter={name:string, element:Element}
