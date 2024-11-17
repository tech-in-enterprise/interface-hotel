import React from "react"
import { Grid, TextField, Box, Button, Typography } from "@mui/material"

export default function SignUp() {
    return (
        <Grid container sx={{ height: '100vh', margin: 0, padding: 0 }}>
            <Grid item xs={6} sx={{ background: '#101F33', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Box>
                    <Typography sx={{ color: 'white', margin: 0, padding: 0 }}>Tech-in</Typography>
                </Box>
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Box sx={{ width: '80%', maxWidth: 400 }}>
                    {/* Nome do hotel e CNPJ */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                label="Nome do Hotel" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="CNPJ" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>

                        {/* Rua e Número */}
                        <Grid item xs={8}>
                            <TextField 
                                label="Rua" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                label="Número" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>

                        {/* Cidade e Estado */}
                        <Grid item xs={8}>
                            <TextField 
                                label="Cidade" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                label="Estado" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>

                        {/* CEP e Telefone */}
                        <Grid item xs={6}>
                            <TextField 
                                label="CEP" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                label="Telefone" 
                                fullWidth 
                                variant="standard" 
                                sx={{ m: 1 }} 
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }} 
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', flexDirection:'row-reverse', mt: 3 }}>
                        <Button variant="contained" color="primary" sx={{fontSize: '0.8rem'}}>
                            Cadastrar
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
