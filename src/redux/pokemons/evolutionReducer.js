const INITIAL_STATE = {
    evolutions: []
}

function evolutionReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "LOADEVOLUTION":
            return{
                evolutions: action.payload
            }

        case "UNSETEVOLUTION":
            return{
                evolutions: []
            }
    
        default:
            return state;
    }
}

export default evolutionReducer

export const getEvolution = (url) => dispatch => {
    if (url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            fetch(data.evolution_chain.url)
            .then(response => response.json())
            .then(data => {
                if (data.chain.species.name === "eevee") {
                    dispatch({
                        type: "LOADEVOLUTION",
                        payload: [
                            data.chain.species.name,
                            data.chain.evolves_to[0].species.name,
                            data.chain.evolves_to[1].species.name,
                            data.chain.evolves_to[2].species.name
                        ]
                    })
                } else if (data.chain.evolves_to[0]) {
                    if (data.chain.evolves_to[0].evolves_to[0]) {
                        dispatch({
                            type: "LOADEVOLUTION",
                            payload: [
                                data.chain.species.name,
                                data.chain.evolves_to[0].species.name,
                                data.chain.evolves_to[0].evolves_to[0].species.name
                            ]
                        })
                    }else {
                        dispatch({
                            type: "LOADEVOLUTION",
                            payload: [
                                data.chain.species.name,
                                data.chain.evolves_to[0].species.name
                            ]
                        })
                    }
                }
            })
        })
    } else {
        dispatch({
            type: "LOADEVOLUTION",
            payload: []
        })
    }
}

export const unsetEvolution = () => dispatch => {
    dispatch({
        type: "UNSETEVOLUTION"
    })
}