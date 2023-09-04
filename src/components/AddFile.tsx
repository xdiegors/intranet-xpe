import Button from "@mui/material/Button";

export default function AddFile() {
  return (
    <>
      <input type="file" />
      <Button
        type="submit"
        variant="contained"
        color="warning"
        sx={{ mt: 3, mb: 2 }}
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{ mt: 3, mb: 2 }}
      >
        Salvar
      </Button>
    </>
  );
}
