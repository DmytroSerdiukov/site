import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({label = 'Value'}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { fontSize: '1rem', marginBottom: '50px', width: "380px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-basic" label="Outlined" label={label} variant="outlined" />
      </div>
    </Box>
  );
}
