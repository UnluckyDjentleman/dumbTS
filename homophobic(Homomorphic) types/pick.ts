//Pick<T,K> filter Object type
type Position="Goalie"|"Forward"|"Defenceman"
type Team="Team Red"|"Team Blue"|"Team White"|"Team Black"

interface IPlayer{
    jerseyNumber: number,
    position: Position,
    team: Team,
    playerName: string
}

type teamRosterFilter=Pick<IPlayer,"position"|"team"|"playerName">
// type teamRosterFilter={position: number, team: Team, playerName: string}
// jerseyNumber was filtered
//type teamRosterFilterOneMore=Pick<IPlayer,"position"|"team"|"playerName"|"U">
//ERROR: not assignable