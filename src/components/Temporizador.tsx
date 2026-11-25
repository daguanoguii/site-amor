import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/700.css'
import '@fontsource/dancing-script/400.css'

const dataInicio = new Date('2026-09-26T00:00:00')

export const Temporizador = () => {

    const [tempo, setTempo] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    })

    const calcularTempoRestante = () => {
        const agora = new Date()
        const diferenca = agora.getTime() - dataInicio.getTime()

        const segundosTotais = Math.floor(diferenca / 1000)

        const dias = Math.floor(segundosTotais / (3600 * 24))
        const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600)
        const minutos = Math.floor((segundosTotais % 3600) / 60)
        const segundos = segundosTotais % 60

        setTempo({ dias, horas, minutos, segundos })
    }
    useEffect(() => {
        calcularTempoRestante()
        const intervalo = setInterval(calcularTempoRestante, 1000)
        return () => clearInterval(intervalo)
    }, [])

    const BaseNumeroTempo = {
        fontFamily: 'Nunito, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1.2,
        mb: 0.5
    }

    const BaseFontTempo = {
        fontFamily: 'Nunito, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.75)',
        letterSpacing: 1.5
    }

    const BaseBoxTempo = {
        minWidth: 0,
        padding: '12px 8px',
        borderRadius: 3,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
        border: '1px solid rgba(255,255,255,0.16)',
        boxShadow: '0 6px 20px rgba(40,0,20,0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            mt: 4
        }}>

            <Box
                sx={BaseBoxTempo}
            >

                <Typography sx={BaseNumeroTempo}>
                    {tempo.dias}
                </Typography>

                <Typography sx={BaseFontTempo}>
                    DIAS
                </Typography>
            </Box>

            <Box
                sx={BaseBoxTempo}
            >
                <Typography sx={BaseNumeroTempo}>
                    {tempo.horas}
                </Typography>

                <Typography sx={BaseFontTempo}>
                    HORAS
                </Typography>
            </Box>

            <Box
                sx={BaseBoxTempo}
            >
                <Typography sx={BaseNumeroTempo}>
                    {tempo.minutos}
                </Typography>

                <Typography sx={BaseFontTempo}>
                    MINUTOS
                </Typography>
            </Box>

            <Box
                sx={BaseBoxTempo}
            >
                <Typography sx={BaseNumeroTempo}>
                    {tempo.segundos}
                </Typography>

                <Typography sx={BaseFontTempo}>
                    SEGUNDOS
                </Typography>
            </Box>
        </Box>
    )
}

