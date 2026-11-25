import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import fotoMor from '../assets/fotoMor.jpeg'
import { useNavigate } from 'react-router-dom'

export const TelaInicial = () => {
    const navigate = useNavigate()

    const [ clicks, setClick ] = useState(0)
    const [ position, setPosition ] = useState({ x: 0, y: 0 })

    const mensagens = [
        'Clique aqui! 🩵',
        'Quase xuxuuu 😝',
        'Tenta de novo! 💗',
        'Você é persistente! 🥰'
    ]

    const handleClick = () => {
        if (clicks < 3) {
            setPosition({
                x: Math.random() * 250 - 100,
                y: Math.random() * 350 - 150
            })
            setClick(clicks + 1)
        } else {
            navigate('/telaprincipal')
        }
    }
    return (
            <Box sx={{
                display: 'flex',
                background: 'linear-gradient(145deg, #3d0a2e 0%, #5c1246 30%, #8b1c68 70%, #a8257a 100%)',
                height: '100dvh',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: 2,
                boxSizing: 'border-box'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        transform: 'translateY(-90px)'
                    }}
                >
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '12px 12px 45px 12px',
                        width: '220px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                        mb: 4,
                        animation: 'polaroidEntrance 1.5s ease-out forwards',

                        '@keyframes polaroidEntrance': {
                            '0%': {
                                opacity: 0,
                                transform: 'translateY(-100px) rotate(12deg)'
                            },
                            '60%': {
                                opacity: 1,
                                transform: 'translateY(10px) rotate(-8deg)'
                            },
                            '80%': {
                                transform: 'translateY(-5px) rotate(-3deg)'
                            },
                            '100%': {
                                opacity: 1,
                                transform: 'translateY(0) rotate(-5deg)'
                            }
                        },

                        transition: 'transform 0.4s ease',

                        '&:hover': {
                            transform: 'rotate(0deg) scale(1.03)'
                        }
                    }}
                >
                    <Box
                        component='img'
                        src={fotoMor}
                        alt='Uma foto nossa'
                        sx={{
                            width: '100%',
                            height: '220px',
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
                            bottom: 10,
                            left: 0,
                            right: 0,
                            fontSize: '1rem'
                        }}
                    >
                        meu lugar favorito ♡
                    </Typography>
                </Box>

                <Typography sx={{
                    color: '#ffe4f1',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    mb: 6,
                    letterSpacing: '0.5px'
                }}>
                    Tenho algo especial pra você...
                </Typography>

                <Button
                    variant='contained'
                    onClick={handleClick}
                    sx={{
                        color: '#fff',
                        background: 'linear-gradient(135deg, #ff8ec7, #ff4fa3)',
                        borderRadius: '50px',
                        padding: '14px 32px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)',
                        transition: 'all 0.3s ease',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        '&:hover': {
                            background: 'linear-gradient(135deg, #ffb0d8, #ff69b4)',
                            boxShadow: '0 0 30px rgba(255, 105, 180, 0.7)'
                        },

                        '&:active': {
                        transform: `translate(${position.x}px, ${position.y}px) scale(0.95)`
                        }
                    }}
                >
                    {mensagens[clicks]}
                </Button>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            color: '#ffd6eb',
                            fontSize: '0.85rem',
                            opacity: 0.8
                        }}
                    >
                        Feito pelo seu namoradinho, com muito carinhoo..
                    </Typography>
                    <Typography
                        sx={{
                            color: '#ffd6eb',
                            fontSize: '0.85rem',
                            opacity: 0.8
                        }}
                    >
                        Guilherme D'Aguano
                    </Typography>
                </Box>        
            </Box>
        
    )
}