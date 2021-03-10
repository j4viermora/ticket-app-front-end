const getTicketLast = async() => {

    const resp  = await fetch( 'http://localhost:8080/tickets' )

    const { data } = await resp.json()

    return data

}

export default getTicketLast