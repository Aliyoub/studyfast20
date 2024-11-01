import React from 'react';
import {useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const TtsSettings = () => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.SpeechSynthesisUtterance !== "undefined"
    ) {
      const voicesList : any = window.speechSynthesis.getVoices();
      setVoices(voicesList);

    }

  });

  return (
    <List>
      {voices.map((v, index) => (
        <ListItem divider={true} key={index}>
          <ListItemText primary={index+1} secondary={v['lang']}  />
          <Checkbox />
          {/* <ListItemText primary={v['name'] (v['lang'])} /> */}
        </ListItem>
      ))}
    </List>
  );
}

export default TtsSettings