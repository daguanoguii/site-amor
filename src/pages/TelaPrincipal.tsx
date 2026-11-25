import { Box, Typography } from '@mui/material'
import fotoDeitada from '../assets/fotoDeitada.jpeg'
import { Temporizador } from '../components/Temporizador'
import { PlayerMusica } from '../components/PlayerMusica'
import { Album } from '../components/Album'
import { Cartinha } from '../components/Cartinha'

export const TelaPrincipal = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(145deg, #3d0a2e 0%, #5c1246 30%, #8b1c68 70%, #a8257a 100%)',
                minHeight: '100dvh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box'
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Cormorant Garamond',
                    color: '#ffe4f1',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mt: 5
                }}
            >
               Minha princesa🤍   
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'Nunito',
                    color: '#ffe4f1',
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    mt: 2
                }}
            >
                Até os dias mais simples se tornam os meus favoritos quando estou com você.
            </Typography>
            
            <Box 
                sx={{
                    backgroundColor: '#fff',
                    padding: '10px 10px 40px 10px',
                    width: '350px',            
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                    mt: 5,
                    transform: 'rotate(-3deg)',
                    position: 'relative',
                    transition: 'transform 0.3s ease',

                    '&:hover': {
                        transform: 'rotate(0deg) scale(1.03)'
                    }
                }}>
                <Box
                    component='img'
                    src={fotoDeitada}
                    alt='Uma foto nossa'
                    sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />

                <Typography
                sx={{
                    color: '#5c1246',
                    fontFamily: 'cursive',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 4,
                    left: 0,
                    right: 0,
                    fontSize: '1.4rem'
                }}
            >
                2 meses de nós ♡
            </Typography>
            </Box>
            <Temporizador />
            <Typography
                sx={{
                    fontFamily: 'Dancing Script, cursive',
                    fontSize: '1.5rem',
                    color: '#fff',
                    textAlign: 'center',
                    mt: 1.5
                }}
            >
                Cada segundo ao seu lado é precioso.
            </Typography>

            <PlayerMusica />

            <Box sx={{ mt: 6, width: '100%', maxWidth: 900 }}>
                <Typography
                    sx={{
                        fontFamily: 'Dancing Script',
                        fontSize: '2rem',
                        color: '#fff',
                        textAlign: 'center',
                        mb: 4,
                    }}
                >
                    Nossos Momentos ♡
                </Typography>
                <Album />
                <Box>
                <Cartinha />
                </Box>
            </Box>
        </Box>
    )
}