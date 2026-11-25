import { Box, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import aliancas from '../assets/aliancas.jpeg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import musicaMor from '../assets/musicaMor.mp3'

export const PlayerMusica = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [tocando, setTocando] = useState(false)
    const [tempoAtual, setTempoAtual] = useState(0)
    const [duracao, setDuracao] = useState(0)

    const togglePlay = () => {
    if (!audioRef.current) return

    if (tocando) {
        audioRef.current.pause()
    } else {
        audioRef.current.play()
    }

    setTocando(!tocando)
}



    return (
        <Box 
            sx={{
                display: 'flex',
                width: '100%',
                maxWidth: 300,
                p: 2,
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 25px rgba(40,0,20,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 4
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 2
                }}>
                <Box
                    component="img"
                    src={aliancas}
                    sx={{
                        width: 250,
                        height: 150,
                        borderRadius: 1,
                        objectFit: 'cover',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',

                    }}
                />

                <Box
                    component="button"
                    onClick={togglePlay}
                    sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: '#fff',
                        color: '#5c1246',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '0.2s',
                        '&:hover': {
                            transform: 'scale(1.08)',
                            backgroundColor: '#fce4ec'
                        }
                    }}
                >
                    {tocando ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
                    
                </Box>
                <Box
                    onClick={(e) => {
                        if (!audioRef.current || !duracao) return

                        const rect = e.currentTarget.getBoundingClientRect()
                        const posicao = (e.clientX - rect.left) / rect.width

                        audioRef.current.currentTime = posicao * duracao
                        setTempoAtual(posicao * duracao)
                    }}
                    sx={{
                        width: '100%',
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255,255,255,0.25)',
                        cursor: 'pointer',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 4,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255,0.25)',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                width: `${(tempoAtual / duracao) * 100}%`,
                                height: '100%',
                                backgroundColor: '#fff',
                                borderRadius: 5,
                                transition: 'width 0.2s linear',
                            }}
                        />
                    </Box>
                </Box>
                <Typography
                    sx={{
                        color: '#fff',
                        fontFamily: 'Nunito',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '0.3px',
                        textAlign: 'center',
                        mt: -0.5
                    }}
                >
                    Foi assim
                </Typography>

                <Typography
                    sx={{
                        color: 'rgba(255,255,255,0.65)',
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        fontSize: '0.85rem',
                        letterSpacing: '0.5px',
                        textAlign: 'center',
                        mt: -2.7,
                    }}
                >
                    Sotam
                </Typography>

                <audio
                    ref={audioRef}
                    src={musicaMor}
                    loop
                    autoPlay
                    onTimeUpdate={() => setTempoAtual(audioRef.current?.currentTime ?? 0)}
                    onLoadedMetadata={() => setDuracao(audioRef.current?.duration ?? 0)}
                />
            </Box>
        </Box>
    )
}