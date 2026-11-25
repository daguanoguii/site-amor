import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

import praiaTenso from '../assets/praiaTenso.jpeg'

import elaNaMoto from '../assets/elaNaMoto.jpeg'
import encontro from '../assets/encontro.jpeg'

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

import beijo1 from '../assets/beijo1.jpeg'



type Memoria = {
    fotos: string[]
    frase: string
    video?: string
}

const memorias: Memoria[] = [
    {
        fotos: [encontro],
        frase: 'Descobri que aquele que parecia ser só mais um encontro acabaria se tornando o começo de algo que eu não queria mais perder.',
    },
    {
        fotos: [praiaTenso, elaNaMoto],
        frase: 'Descobri que nem uma multa de 600 reais consegue estragar um dia ao seu lado... mas também descobri que nunca, em hipótese alguma, devo deixar você com fome. 😂🤍',
    },
    {
        fotos: [acad, acad1, acad2],
        frase: 'Descobri que você tem os melhores treinos de perna, e que os treinos de perna ficam interessante quando estamos juntos.',
    },

    {
        fotos: [mascaraCara, fomeRosa],
        frase: 'Descobri que seu jeito de cuidar de mim é uma das coisas que mais amo em você, e que não existe sensação melhor do que saber que tenho você ao meu lado.',
    },
    {
        fotos: [barcoVikin, sorrisonosso],
        frase: 'Descobri que a vida é muito mais bonita quando estamos juntos, e que cada momento ao seu lado é um presente que eu quero aproveitar ao máximo.',
    },
    {
        fotos: [sorriso],
        frase: 'Descobri que seu sorriso já é lindo por si só, mas que a beleza que enxergo em você vai muito além de qualquer roupa ou aparência.'
    },
    {
        fotos: [sesc, ibira, beijo1],
        frase: 'E se tem uma coisa que eu tenho certeza, é que os melhores momentos da minha vida são aqueles que compartilho com você. Ainda temos tantos lugares para conhecer, tantas coisas para experimentar, tantas risadas para dar e tantas histórias para viver. Espero que esse álbum seja apenas o começo de tudo que ainda vamos construir juntos, porque, entre todas as aventuras que a vida pode me proporcionar, a que mais quero é continuar vivendo ao seu lado.'
    }

]

export const Album = () => {
    const [pagina, setPagina] = useState(0)
    const [fotoAtual, setFotoAtual] = useState(0)

    const retirarFoto = () => {
        const quantidade = memorias[pagina].fotos.length

        if (quantidade > 1) {
            setFotoAtual((atual) => (atual + 1) % quantidade)
        }
    }

    const proximaPagina = () => {
        if (pagina < memorias.length - 1) {
            setPagina(pagina + 1)
            setFotoAtual(0)
        }
    }

    const paginaAnterior = () => {
        if (pagina > 0) {
            setPagina(pagina - 1)
            setFotoAtual(0)
        }
    }



    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 400,
                mx: 'auto',
                mt: 6,
                textAlign: 'center',
            }}
        >
                <Box>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pagina}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box
                                sx={{
                                    p: 2.5,
                                    borderRadius: 4,
                                    background: 'linear-gradient(145deg, #e9e3d8, #d6cfc3)',
                                    boxShadow: '0 10px 30px rgba(40,0,20,0.2)',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 380,
                                        width: '100%',
                                    }}
                                >
                                    {memorias[pagina].fotos.map((foto, index) => {
                                        const quantidade = memorias[pagina].fotos.length

                                        const estilosFotos = {
                                            1: {
                                                transform: 'rotate(-3deg)',
                                                width: '85%',
                                                position: 'relative' as const,
                                                top: 0,
                                                left: 0,
                                            },
                                            2: {
                                                transform: index === 0 ? 'rotate(-8deg)' : 'rotate(8deg)',
                                                width: '65%',
                                                position: index === 0 ? 'relative' as const : 'absolute' as const,
                                                top: index === 1 ? 20 : 0,
                                                left: index === 1 ? '15%' : 0,
                                            },
                                            3: {
                                                transform:
                                                    index === 0
                                                        ? 'rotate(-10deg)'
                                                        : index === 1
                                                        ? 'rotate(8deg)'
                                                        : 'rotate(-3deg)',
                                                width: '60%',
                                                position: index === 0 ? 'relative' as const : 'absolute' as const,
                                                top: index === 1 ? 20 : index === 2 ? -20 : 0,
                                                left: index === 1 ? '25%' : index === 2 ? '10%' : 0,
                                            },
                                        }

                                        const estilo = estilosFotos[quantidade as keyof typeof estilosFotos]

                                        if (!estilo) return null

                                        return (
                                            <motion.img
                                                key={index}
                                                src={foto}
                                                onClick={retirarFoto}
                                                initial={false}
                                                animate={{
                                                    x: '-50%',
                                                     y: index === fotoAtual ? '-50%' : 'calc(-50% + 20px)',
                                                    scale: index === fotoAtual ? 1 : 0.95,
                                                    rotate: index === fotoAtual ? 0 : index % 2 === 0 ? -8 : 8,
                                                }}
                                                transition={{ duration: 0.5 }}
                                                style={{
                                                    height: 320,
                                                    objectFit: 'cover',
                                                    border: '8px solid #e8e2d8',
                                                    borderBottom: '25px solid #e8e2d8',
                                                    borderRadius: 4,
                                                    boxShadow: '0 8px 20px rgba(40,0,20,0.2)',
                                                    cursor: quantidade > 1 ? 'pointer' : 'default',
                                                    ...estilo,
                                                    zIndex: index === fotoAtual ? quantidade : quantidade - index,
                                                    position: 'absolute',
                                                    left: '50%',
                                                    top: '50%',
                                                }}
                                            />
                                        )
                                    })}
                                </Box>

                                <Typography
                                    sx={{
                                        mt: 3,
                                        color: '#40382f',
                                        fontFamily: 'Cormorant Garamond',
                                        fontSize: '1.3rem',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {memorias[pagina].frase}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 2,
                                        color: '#40382f',
                                        fontFamily: 'Cormorant Garamond',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    {pagina + 1} / {memorias.length} 
                                </Typography>
                            </Box>
                        </motion.div>
                    </AnimatePresence>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2,
                            gap: 2,
                            mb: 2,
                        }}
                    
                    >
                        <Button
                            onClick={paginaAnterior}
                            disabled={pagina === 0}
                            sx={{
                                color: '#e8e2d8',
                                border: '1px solid rgba(232,226,216,0.4)',
                                borderRadius: '30px',
                                px: 3,
                                py: 1,
                                fontFamily: 'Cormorant Garamond',
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                transition: '0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(232,226,216,0.12)',
                                    borderColor: '#e8e2d8',
                                },
                                '&:disabled': {
                                    color: 'rgba(232,226,216,0.3)',
                                    borderColor: 'rgba(232,226,216,0.15)',
                                },
                            }}
                        >
                            ← Anterior
                        </Button>

                        <Button
                            onClick={proximaPagina}
                            disabled={pagina === memorias.length - 1}
                            sx={{
                                color: '#e8e2d8',
                                border: '1px solid rgba(232,226,216,0.4)',
                                borderRadius: '30px',
                                px: 3,
                                py: 1,
                                fontFamily: 'Cormorant Garamond',
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                transition: '0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(232,226,216,0.12)',
                                    borderColor: '#e8e2d8',
                                },
                                '&:disabled': {
                                    color: 'rgba(232,226,216,0.3)',
                                    borderColor: 'rgba(232,226,216,0.15)',
                                },
                            }}
                        >
                            Próxima →
                        </Button>
                    </Box>

                    {pagina === memorias.length - 1 && (
                        <Typography
                            sx={{
                                color: '#fff',
                                fontFamily: 'Dancing Script',
                                fontSize: '1.6rem',
                                mt: 2,
                            }}
                        >
                            Ainda temos tantas coisas para descobrir juntos... 
                        </Typography>
                    )}
                </Box>
        </Box>
    )
}