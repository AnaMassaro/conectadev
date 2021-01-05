import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const posts = [
  {
    id: 1,
    autor: {
      id: 1,
      name: 'Lucas Nhimi',
      username: 'lucasnhimi',
      avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: "Criando um app do zero utilizando react",
    date: "April 7, 2020",
    description: 'Fala pessoal! Qual o framework favorito de voces?',
    hashtags: "#dotnet, #javascript, #reactjs, #developer",
    image: "/images/posts/post9.jpeg"
  },
  {
    id: 2,
    autor: {
      id: 1,
      name: 'Lucas Nhimi',
      username: 'lucasnhimi',
      avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: "Comparativo entre React e Vue - Performance",
    date: "April 1, 2020",
    description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiencia com voces!',
    hashtags: "#framework, #javascript, #reactjs, #vue",
    image: "/images/posts/post8.png"
  },
];

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        posts.map((post) =>(
          <PostCard key={post.id} post={post}/>
        ))
      }
    </div>
  );
}

export default Feed;