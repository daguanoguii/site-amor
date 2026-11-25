import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

import encontro from '../assets/encontro.jpeg'
import praiaTenso from '../assets/praiaTenso.jpeg'
import elaNaMoto from '../assets/elaNaMoto.jpeg'
import acad from '../assets/acad.jpeg'
import acad1 from '../assets/acad1.jpeg'
import acad2 from '../assets/acad2.jpeg'
import mascaraCara from '../assets/mascaraCara.jpeg'
import fomeRosa from '../assets/fomeRosa.jpeg'
import barcoVikin from '../assets/barcoVikin.jpeg'
import sorrisonosso from '../assets/sorrisonosso.jpeg'
import sorriso from '../assets/sorriso.jpeg'
import sesc from '../assets/sesc.jpeg'
import ibira from '../assets/ibira.jpeg'
import escuro from '../assets/escuro.jpeg'
import beijo1 from '../assets/beijo1.jpeg'
import familia from '../assets/familia.jpeg'
import fotoMor from '../assets/fotoMor.jpeg'
import aliancas from '../assets/aliancas.jpeg'
import arvore from '../assets/arvore.jpeg'
import beijo from '../assets/beijo.jpeg'
import amo from '../assets/amo.jpeg'
import dormindo from '../assets/dormindo.jpeg'
import dedo from '../assets/dedo.jpeg'
import hallo from '../assets/hallo.jpeg'
import dedin from '../assets/dedin.jpeg'
import brisa from '../assets/brisa.jpeg'
import ombro from '../assets/ombro.jpeg'
import encontro1 from '../assets/encontro1.jpeg'

const fotos = [
    encontro,
    praiaTenso,
    elaNaMoto,
    acad,
    acad1,
    acad2,
    mascaraCara,
    fomeRosa,
    barcoVikin,
    sorrisonosso,
    sorriso,
    sesc,
    ibira,
    escuro,
    beijo1,
    familia,
    fotoMor,
    aliancas,
    arvore,
    beijo,
    amo,
    dormindo,
    dedo,
    hallo,
    dedin,
    brisa,
    ombro,
    encontro1
]

const distribuirFotos = (quantidade: number) => {
    const largura = 90 
    const inicio = 5

    return Array.from({ length: quantidade }, (_, index) => {
        const posicao = inicio + (index * largura) / quantidade
        
        return posicao
    })
}

export const Final = () => {
    const posicoes = distribuirFotos(fotos.length)

    return (
        <Box
            sx={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                    'radial-gradient(circle at center, #243247 0%, #111827 50%, #080d17 100%)',
                overflow: 'hidden',
                px: 2,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Dancing Script',
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            color: '#d6c6a5',
                            textAlign: 'center',
                            mt: 3,
                            fontWeight: 'bold',
                        }}
                    >
                        Kelly Trindade de Freitas
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Dancing Script',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: '4rem',
                                sm: '7rem',
                                md: '10rem',
                            },
                            color: '#fffaf0',
                            textAlign: 'center',
                            lineHeight: 1,
                            textShadow: '0 0 30px rgba(255,250,240,0.15)',
                        }}
                    >
                        Eu te amo grandãooo
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Dancing Script',
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            color: '#d6c6a5',
                            textAlign: 'center',
                            mt: 3,
                        }}
                    >
                        Hoje, amanhã e em cada pedacinho do nosso futuro. ❤️
                    </Typography>
                </motion.div>
            </Box>

            {[...Array(18)].map((_, index) => (
                <motion.div
                    key={`heart-${index}`}
                    initial={{
                        opacity: 0,
                        y: 0,
                        x: Math.random() * window.innerWidth,
                    }}
                    animate={{
                        opacity: [0, 0.7, 0],
                        y: -window.innerHeight - 100,
                    }}
                    transition={{
                        duration: 7 + Math.random() * 5,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                    }}
                    style={{
                        position: 'absolute',
                        bottom: -50,
                        fontSize: `${15 + Math.random() * 25}px`,
                        pointerEvents: 'none',
                        zIndex: 1,
                    }}
                >
                    ❤️
                </motion.div>
            ))}

            {fotos.map((foto, index) => (
                <motion.div
                    key={`foto-${index}`}
                    initial={{
                        y: 0,
                        x: 0,
                        opacity: 0,
                        rotate: Math.random() * 30 - 15,
                    }}
                    animate={{
                        y: -window.innerHeight - 300,
                        x: Math.random() * 300 - 150,
                        opacity: [0, 1, 1, 0],
                        rotate: Math.random() * 30 - 15,
                    }}
                    transition={{
                        duration: 12 + Math.random() * 8,
                        delay: Math.random() * 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        position: 'absolute',
                        bottom: -250,
                        left: `${posicoes[index]}%`,
                        width: `${100 + Math.random() * 60}px`,
                        padding: '8px 8px 25px',
                        background: '#fffaf0',
                        borderRadius: 4,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                        zIndex: 2,
                        pointerEvents: 'none',
                    }}
                >
                    <img
                        src={foto}
                        alt="Uma memória nossa"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            ))}
        </Box>
    )
}