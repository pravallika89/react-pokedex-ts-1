
interface PokemonCardProps{
  pokemon:Pokemon
}
const PokemonCard:React.FC<PokemonCardProps> =({pokemon})=>{
  return(
    <div className='row'>
    <div className='col'>
      <div className='text-secondary'>Candy</div>
      <div>{pokemon.candy}</div>
      <div className='text-secondary'>Candy Count</div>
      <div>{pokemon.candy_count}</div>
      <div className='text-secondary'>Egg</div>
      <div>{pokemon.egg}</div>
    </div>
    <div className='col'>
    <div className='text-secondary'>Spawn Chance</div>
      <div>{pokemon.spawn_chance}</div>
      <div className='text-secondary'>Avg Spawns</div>
      <div>{pokemon.avg_spawns}</div>
      <div className='text-secondary'>Spawn Time</div>
      <div>{pokemon.spawn_time}</div>                      
    </div> 
  </div>
  )
}
export default PokemonCard;