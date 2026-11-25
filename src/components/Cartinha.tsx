import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const Cartinha = () => {
    const [aberta, setAberta] = useState(false)
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Dancing Script',
                    fontSize: '1.8rem',
                    color: '#fff',
                    mb: 2,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                Guardei mais uma coisinha pra você... ♡
            </Typography>

            <Box
                onClick={() => setAberta(!aberta)}
                sx={{
                    position: 'relative',
                    width: 300,
                    height: aberta ? 340 : 200,
                    cursor: 'pointer',
                    transition: 'height 0.8s ease',
                }}
            >
                {/* Carta */}
                <motion.div
                    initial={false}
                    animate={{
                        y: aberta ? -110 : 0,
                        height: aberta ? 320 : 180,
                    }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'absolute',
                        width: '90%',
                        left: '5%',
                        top: 10,
                        background: '#fffaf0',
                        borderRadius: 5,
                        boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                        padding: 20,
                        overflowY: aberta ? 'auto' : 'hidden',
overflowX: 'hidden',
                        zIndex: 1,
                    }}
                >
                    <AnimatePresence>
                        {aberta && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Dancing Script',
                                        fontSize: '1.8rem',
                                        color: '#b76e79',
                                        mb: 2,
                                    }}
                                >
                                    Meu amor... ♡
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: 'Cormorant Garamond',
                                        fontSize: '1.15rem',
                                        lineHeight: 1.6,
                                        color: '#514438',
                                        paddingBottom: 2,
                                    }}
                                >
                                    Queria que você soubesse o quanto é especial
                                    pra mim. Cada momento que vivemos, cada risada,
                                    cada abraço e até os dias mais simples se tornam
                                    especiais quando estou ao seu lado.

                                    <br />
                                    <br />

                                    Não sei o que o futuro reserva pra gente, mas sei que
                                    quero continuar criando memórias incriveis, vivendo
                                    aventuras e descobrindo o mundo com você.

                                    <br />
                                    <br />

                                    Obrigado por ser você, por cuidar de mim e por
                                    fazer meus dias mais felizes.

                                    <br />
                                    <br />

                                    Eu te amo. ❤️
                                </Typography>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: 150,
                        background: '#dba5a9',
                        borderRadius: '0 0 10px 10px',
                        zIndex: 2,
                        overflow: 'hidden',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    }}
                >
    
                    <motion.div
                        animate={{
                            y: aberta ? -110 : 0,
                            height: aberta ? 420 : 180,
                        }}
                        transition={{ duration: 0.7 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            borderLeft: '150px solid transparent',
                            borderRight: '150px solid transparent',
                            borderTop: '100px solid #c78691',
                            transformOrigin: 'top',
                            zIndex: 3,
                        }}
                    />

                    
                    <AnimatePresence>
                        {!aberta && (
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 45,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 4,
                                    fontSize: 35,
                                }}
                            >
                                ❤️
                            </motion.div>
                        )}
                    </AnimatePresence>

                    
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: 0,
                            height: 0,
                            borderLeft: '150px solid #e7b6b9',
                            borderTop: '75px solid transparent',
                            borderBottom: '75px solid transparent',
                            zIndex: 3,
                        }}
                    />

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 0,
                            height: 0,
                            borderRight: '150px solid #e7b6b9',
                            borderTop: '75px solid transparent',
                            borderBottom: '75px solid transparent',
                            zIndex: 3,
                        }}
                    />

                    
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            borderLeft: '150px solid transparent',
                            borderRight: '150px solid transparent',
                            borderBottom: '150px solid #dba5a9',
                            zIndex: 3,
                        }}
                    />
                    {aberta && (
                        <Box
                            onClick={(e) => {
                                e.stopPropagation()
                                navigate('/final')
                            }}
                            sx={{
                                position: 'absolute',
                                bottom: 35,
                                left: 0,
                                width: '100%',
                                zIndex: 5,
                                textAlign: 'center',
                                cursor: 'pointer',
                                color: '#fffaf0',
                                fontFamily: 'Dancing Script',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            Clique aqui, xuxuu 🩵​
                        </Box>
                    )}
                </Box>
            </Box>

            <Typography
                sx={{
                    mt: 2,
                    fontFamily: 'Dancing Script',
                    fontSize: '1.3rem',
                    color: '#fff',
                }}
            >
                {aberta ? '♡' : 'Toque para abrir'}
            </Typography>
        </Box>
    )
}