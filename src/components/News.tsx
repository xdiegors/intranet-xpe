import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";

export default function News() {
  return (
    <Card sx={{ maxWidth: 900, marginBottom: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            D
          </Avatar>
        }
        title="Diego Ribeiro"
        subheader="17 de agosto de 2023"
      />
      <Divider variant="fullWidth" />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1676816823266-a8bb9a998de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum esse
          iure amet quasi labore nobis molestias eaque, corporis tempora aut
          provident similique vitae eveniet ullam repudiandae quo cum recusandae
          nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          odio quisquam, temporibus quam, minima maiores ut unde culpa fuga nam
          aut distinctio praesentium nemo ullam harum est nesciunt dolor
          blanditiis?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          aliquam reiciendis consequatur illum et quia, ullam ipsum facilis
          earum, praesentium perspiciatis qui beatae! Temporibus obcaecati saepe
          maxime amet inventore? Quam. Consectetur eveniet unde dignissimos
          maxime sapiente obcaecati ullam esse facilis suscipit, quod ducimus
          neque provident natus. Non, quam nobis eaque maiores veritatis, eos
          error consequuntur, sed dolor qui neque adipisci! Quos exercitationem,
          et cumque soluta nisi beatae ducimus dolor distinctio, sit expedita
          dolores voluptatem reiciendis natus molestiae iusto harum numquam
          libero eum rerum praesentium at laboriosam omnis dicta. Laudantium,
          eligendi. Incidunt possimus architecto ab obcaecati, vitae laudantium
          commodi quidem earum at ipsum quasi similique? Placeat consectetur
          tempore ullam facilis, iste vitae, cupiditate ducimus rerum quam
          maiores laborum rem explicabo harum. Aliquid dicta hic consectetur?
          Porro facere perspiciatis veniam quo dicta! Nisi, dignissimos vero.
          Itaque placeat quaerat omnis iste? Numquam dolor praesentium vitae
          temporibus magni labore et cupiditate alias dolore odit?
        </Typography>
      </CardContent>
    </Card>
  );
}
