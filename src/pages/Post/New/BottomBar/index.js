import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles(() => ({
  root: {
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
  },
}));

function BottomBar() {
  const classes = useStyles();
  const ctx = usePost();
  
  const handleSaveDraft = () => {
    //acessar backend e salvar rascunho
  };

  const handlePublish = () => {
    //acessar back end e publicar este post
  };
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.button}>Salvar rascunho</Button>
        <Button color="secondary" variant="outlined">Publicar</Button>
      </Toolbar>
    </AppBar>
  );
}

export default BottomBar;