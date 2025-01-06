import React, { useState, useEffect } from 'react'
import { Button, TextField, Grid, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRoles } from '../../../redux/slice/roles/roleSlice'
import { getHotelById } from '../../../redux/slice/admin/register-hotel'
import Title from '../../general-components/title-from-pages'



export default function Users() {
    const dispatch = useDispatch()
    const { roles, message, error, loading } = useSelector((state) => state.roles)
    const { hotelRegister } = useSelector((state) => state.hotel)

    useEffect(() => {
        dispatch(getAllRoles())
        dispatch(getHotelById())
    }, [dispatch])


    const [selectedRole, setSelectedRole] = useState('')
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value)
    }


    return (
        <React.Fragment>
            <Title Title={"Gerenciamento de Usuários"} />
            <Paper elevation={3} sx={{ padding: 2, mt: 2, mb: 2 }}>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField
                                label="Nome do usuário"
                                required
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    style: { height: '40px', padding: '0' },
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '0.9rem',
                                        lineHeight: '15px',
                                        paddingRight: 2
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="E-mail"
                                required
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    style: { height: '40px', padding: '0' },
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '0.9rem',
                                        lineHeight: '15px',
                                        paddingRight: 2
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                label="Senha"
                                type="password"
                                required
                                fullWidth
                                variant="outlined"
                                
                                InputProps={{
                                    style: { height: '40px', padding: '0' },
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '0.9rem',
                                        lineHeight: '15px',
                                        paddingRight: 2
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Confirmar senha"
                                type="password"
                                required
                                fullWidth
                                variant="outlined"
                                InputProps={{ style: { height: '40px' }}}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '0.9rem',
                                        lineHeight: '15px',
                                        paddingRight: 2
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel sx={{ fontSize: '0.9rem', lineHeight: '1rem', paddingRight: 2}} id="select-label">Nível de acesso</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="select"
                                    label="Nível de acesso"
                                    required
                                    value={selectedRole}
                                    onChange={handleRoleChange}
                                    sx={{ height: '40px'}}
                                >
                                    {roles.map((role) => (
                                        <MenuItem key={role.id} value={role.id}>
                                            {`${role.id} - ${role.access_level}: ${role.description_of_access_level}`}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {selectedRole === 2 && (
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ fontSize: '0.9rem', lineHeight: '1rem', paddingRight: 2}} id="select-label">Hotel</InputLabel>
                                    <Select labelId="select-label" id="select" label="Hotel" sx={{ height: '40px'}}>
                                        {hotelRegister.map((hotel) => (
                                            <MenuItem key={hotel.id} value={hotel.id}>
                                                {hotel.hotel_name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}

                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 1 }}>
                    <Button variant="contained" color="primary" sx={{ fontSize: '0.8rem', padding: '6px 12px', textTransform: 'none' }}>
                        Salvar
                    </Button>
                </Box>
            </Paper>
            Usuários
        </React.Fragment>
    )
}