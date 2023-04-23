import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = ({
    half,
    name,
    label,
    handleChange,
    autoFocus,
    type,
    handleShowPassword,
}) => {
    const myInputProps = {
        endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                    {type === 'password' ? (
                        <Visibility />
                    ) : (
                        <VisibilityOff />
                    )}
                </IconButton>
            </InputAdornment>
        ),
    };

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                label={label}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' ? myInputProps : {}}
                xs={6}
            />
        </Grid>
    );
};

export default Input;
