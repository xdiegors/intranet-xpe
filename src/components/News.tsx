import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import authHeader from "../services/AuthHeader";
import axios from "axios";

interface News {
  _id: string;
  content: string;
  date: Date;
}

export default function News() {
  const [newsData, setNewsData] = useState(Array<News>);

  useEffect(() => {
    axios
      .get("http://localhost:3000/news")
      .then((response) => {
        // Axios already parses JSON responses, so you can directly access the data property.
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return newsData.map((item: News) => (
    <Card key={item._id} sx={{ maxWidth: 900, marginBottom: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            D
          </Avatar>
        }
        title="Diego Ribeiro" // Update this with your name or a dynamic value
        subheader={new Date(item.date).toLocaleDateString("pt-BR")}
      />
      <Divider variant="fullWidth" />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1676816823266-a8bb9a998de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography component={"div"} variant="body2" color="text.secondary">
          {item.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Typography>
      </CardContent>
    </Card>
  ));
}
