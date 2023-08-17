import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function Birthdays() {
  return (
    <Card>
      <CardHeader title="Aniversariantes do dia" />
      <CardContent>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
        <Typography variant="body2" color="text.secondary">
          Diego
        </Typography>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
        <Typography variant="body2" color="text.secondary">
          Diego 2
        </Typography>
      </CardContent>
    </Card>
  );
}
