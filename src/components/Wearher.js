import React from 'react'

const Wearher = (props) => {

    return (
            <div>
            {props.city && 
            <div>
                <p>Местоположение: {props.city}</p>
                <p>Температура: {props.temp}</p>
                <p>Давлениее: {props.pressure}</p>
                <p>Заход сонца: {props.sunset}</p>
            </div>
            }
            <p>{props.error}</p>
            </div>
    )
}

export default Wearher