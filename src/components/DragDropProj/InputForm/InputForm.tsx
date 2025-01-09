import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AbcIcon from "@mui/icons-material/Abc";
import DescriptionIcon from "@mui/icons-material/Description";

export default function InputForm() {
  return (
    <Box component='form' sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidate autoComplete='off'>
      <div>
        <AbcIcon
          sx={{
            color: "action.active",
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField id='standard-multiline-flexible' label='Title' multiline maxRows={4} variant='standard' />
        <AccountCircle
          sx={{
            color: "action.active",
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField id='standard-textarea' label='People' placeholder='People' multiline variant='standard' />
        <DescriptionIcon
          sx={{
            color: "action.active",
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField
          fullWidth
          id='fullWidth'
          label='Description'
          multiline
          rows={3}
          defaultValue='Description'
          variant='standard'
        />
      </div>
    </Box>
  );
}
