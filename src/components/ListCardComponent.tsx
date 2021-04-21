import { setTypeColor } from '../services';

interface ListCardProps{
  poke:Pokemon
}

const ListCardComponent:React.FC<ListCardProps>=({poke})=>{
  return (
    <div id="list-component">
      <div>
                  <div className='text-secondary'>Type</div>
                    <div>
                      {poke.type.map((t, i) => {
                        return (
                          <span
                            className='badge badge-pill text-white mx-1'
                            style={{ backgroundColor: setTypeColor(t) }}
                            
                            key={i}>
                            {t}
                            </span>
                            );
                          })}
                    </div>
                    
                  </div>

                  <div>
                    <div className='text-secondary'>Weaknessess</div>
                      <div>
                        {poke.weaknesses.map((w, i) => {
                          return (
                            <span
                              className='badge badge-pill text-white mx-1'
                              style={{ backgroundColor: setTypeColor(w) }}
                              key={i}>
                              {w}
                              </span>
                            );
                          })}
                      </div>
                    </div>

      
    </div>
  )
}
export default ListCardComponent;