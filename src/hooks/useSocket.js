import { useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client'

export const useSocket = ( pathSever ) => {


        const socket =  useMemo(() => io.connect( pathSever, { transports : ['websocket'] } ), [pathSever]  )

        const [ online, setOnline ] = useState( false )

        useEffect( () => {
             
            setOnline( socket.connected );

        }, [ socket ]);

       


        useEffect( () => {

            socket.on( 'connect', () => {
                setOnline( true )
            } )

        }, [ socket ] )

        useEffect( ()=> {
            socket.on( 'disconnect', () => {
                setOnline( false )
            } )
        } )

        return {
            online,
            socket
        }

};

// import { useEffect, useMemo, useState } from 'react';
// import io from 'socket.io-client';


// export const useSocket = ( serverPath ) => {
    
//     const socket = useMemo(() => io.connect( serverPath, {transports: ['websocket']} ), [ serverPath ] );
//     const [ online, setOnline ] = useState(false);

//     useEffect(() => {
//         setOnline( socket.connected );
//     }, [socket])

//     useEffect(() => {
//         socket.on('connect', () => setOnline( true ));
//     }, [ socket ])

//     useEffect(() => {
//         socket.on('disconnect', () => setOnline( false ));
//     }, [ socket ])

//     return {
//         socket,
//         online
//     }
// }