import CarItem from '../card/Card';
import {v4 as uuidv4 } from "uuid"

const Carliste = ({cars}) => {
    return ( 
        <>
            {cars.map((car, index) => {
                console.log(uuidv4());
                return (
                    <div key={index}>
                        <CarItem
                            wurst={uuidv4()}
                            marke={car.marke}
                            farbe={car.farbe}
                            modell={car.modell}
                            Produktionsjahr={car.produktionsjahr}
                            ps={car.ps}
                        />
                    </div>
                )
            }
            )}
        </>
     );
}
 
export default Carliste;