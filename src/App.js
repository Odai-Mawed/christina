import logo from './logo.svg';
import leachelnEmoji from './media/laechelnEmoji.png';
import c1  from './media/c1.JPG';
import c2 from './media/c2.JPG';
import c13 from './media/c13.JPG';
import c16 from './media/c16.JPG';
import c25 from './media/c25.JPG';
import c26 from './media/c26.JPG';
import c27 from './media/c27.JPG';
import c30 from './media/c30.JPG';
import c31 from './media/c31.JPG';
import c32 from './media/c32.JPG';

import c41 from './media/c41.JPG';
import c42 from './media/c42.JPG';
import c43 from './media/c43.JPG';

import c51 from './media/c51.JPG';
import c52 from './media/c52.JPG';
import c53 from './media/c53.JPG';
import c54 from './media/c54.JPG';
import cv1 from './media/cv1.mp4'
import cv2 from './media/cv2.MOV'
import cv3 from './media/cv3.MOV'
import cv4 from './media/cv4.MP4'
import './App.css';
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import FragebogenFrage from './FragebogenFrage';
import JaNeinCheckbox from './JaNeinCheckbox';
import Geburtsdatum from './Geburtsdatum';
import TextField from '@mui/material/TextField';


const pStyle = {
  display: 'none',
  color: 'red'
};

const images = require.context('./media', true);


function App() {
  var [currentSide, setCurrentSide] = useState('s1');
  var [currentFoto, setCurrentFoto] = useState(c1);

  const firstSide = (
  <div className="App s1">
    <header className="App-header">
      <p>scroll nach unten</p>
      <img src={logo} className="App-logo App-logo2" alt="logo" />
      <img src={c1} className="App-logo" alt="logo" />
      <div className="pContainer">
        <p id='p1' className="p1" style={pStyle}>Ah, CHRISTINA</p>
        <p id='p2' className="p2" style={pStyle}>FREUT MICH SEHR, DASS DU HIER BIST</p>
        <p id='p3' className="p3" style={pStyle}>DU FRAGST DICH JETZT BESTIMMT WARUM DU HIER BIST</p>
      </div>
      <Button sx={{marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </header>
  </div>)


  const secondSide = (
    <div className="App App-header s2">
      <h1>Das allerschönste Mädchen</h1>
      <div style={{margin:'auto', width:'fit-content'}}>
        <video style={{margin:'auto'}} width="320" height="240" controls>
          <source src={cv1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
      variant="contained" 
      color="success"
      onClick={changeCurrentSide}
      >
      WEITER
      </Button>
    </div>
  )

  const thirdSide = (
    <div className="App App-header s3">
        <h1 style={{color:'red'}}>ich liebe dich so sehr</h1>
        <div>
          <img id="img1" src={c13} width="400px" height="400px" />
          <img id="img1" src={c16} width="400px" height="400px" />
          <img id="img1" src={c31} width="400px" height="400px" />
          <div style={{margin:'auto', width:'fit-content'}}>
            <video style={{margin:'auto'}} width="320" height="240" controls>
              <source src={cv4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <img id="img1" src={c32} width="400px" height="400px" />
          <h1 style={{color:'red'}}>ich liebe dich unendlich viel</h1>
          <img id="img1" src={c41} width="400px" height="400px" />
          <img id="img1" src={c42} width="400px" height="400px" />
          <img id="img1" src={c43} width="400px" height="400px" />
          <h1 style={{color:'white'}}>du machst mein leben so schön</h1>
          <div style={{margin:'auto', width:'fit-content'}}>
            <video style={{margin:'auto'}} width="320" height="240" controls>
              <source src={cv2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <img id="img1" src={c51} width="400px" height="400px" />
          <img id="img1" src={c52} width="400px" height="400px" />
          <img id="img1" src={c53} width="400px" height="400px" />
          <img id="img1" src={c54} width="400px" height="400px" />
          <h1 style={{color:'green'}}>ich will dich für immer haben</h1>
          <div style={{margin:'auto', width:'fit-content'}}>
            <video style={{margin:'auto'}} width="320" height="240" controls>
              <source src={cv3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <img id="img1" src={c30} width="400px" height="400px" />
          <img id="img1" src={c2} width="400px" height="400px" />
          <img id="img1" src={c27} width="400px" height="400px" />
          <img id="img1" src={c25} width="400px" height="400px" />
          <img id="img1" src={c26} width="400px" height="400px" />

        </div>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const fourthSide = (
    <div className="App App-header s4">
        <h1>Lass uns mal ein kleines Spiel spielen</h1>
        <h4 style={{color:'red', padding:'10px'}}>Lass uns erfahren, wie es um deine Beziehung aussieht!!!</h4>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const fiveSide = (
    <div className="App App-header s5">
        <h1>Antworte immer mit JA ODER NEIN</h1>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const sixSide = (
    <div className="App App-header s6">
        <FragebogenFrage>Läufts es gerade nicht so gut mit mir?</FragebogenFrage>
        <div style={{margin:'auto'}}>
          <JaNeinCheckbox />
        </div>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const sevenSide = (
    <div className="App App-header s7">
        <FragebogenFrage>DU fühlst dich von mir nicht so gut behandelt?</FragebogenFrage>
        <div style={{margin:'auto'}}>
          <JaNeinCheckbox />
        </div>        
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const eightSide = (
    <div className="App App-header s8">
        <FragebogenFrage>DU fühlst dich oft unwohl und nicht verstanden?</FragebogenFrage>
        <div style={{margin:'auto'}}>
          <JaNeinCheckbox />
        </div>        
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const nineSide = (
    <div className="App App-header s9">
        <FragebogenFrage>DU hast oft echt gar keine Lust mehr und willst nur noch aufgeben?</FragebogenFrage>
        <div style={{margin:'auto'}}>
          <JaNeinCheckbox />
        </div>        
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const tenSide = (
    <div className="App App-header s10">
        <FragebogenFrage>DU wünschst dir, dass die Situation sich bald ändert und nur noch gute Sachen auf dich zukommen?</FragebogenFrage>
        <div style={{margin:'auto'}}>
          <JaNeinCheckbox />
        </div>        
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const elevenSide = (
    <div className="App App-header s11">
        <FragebogenFrage>Nenne 3 Sachen, die dich belasten?</FragebogenFrage>
        <div style={{margin:'auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <TextField
            sx={{margin:'20px' ,width: '50%', backgroundColor:'white'}}
            required
            id="outlined-required"
            label="ERSTE Sache"
          />
          <TextField
            sx={{margin:'20px', width: '50%',backgroundColor:'white'}}
            required
            id="outlined-required"
            label="ZWEITE Sache"
          />
          <TextField
            sx={{margin:'20px', width: '50%',backgroundColor:'white'}}
            required
            id="outlined-required"
            label="DRITTE Sache"
          />       
        </div>        
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const twelveSide = (
    <div className="App App-header s12">
        <FragebogenFrage>Wann willst, dass alles wieder gut wird?</FragebogenFrage>
        <div style={{backgroundColor:'white',margin:'auto', width: 'fit-content'}}>
          <Geburtsdatum />
        </div>        
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const thirteenSide = (
    <div className="App App-header s13">
        <h1>Glückwunsch!!! du hast alle Fragen gut beantwortet!!!</h1>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )

  const fourteenSide = (
    <div className="App App-header s14">
        <h1>Willst du das Ergebnis erfahren??</h1>
        <div style={{margin:'auto'}}>
          <JaNeinCheckbox />
        </div>  
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )

  const fiveteenSide = (
    <div className="App App-header s15">
        <h1>Alles klar!!! </h1>
        <h4>Wir hoffen nur auf das beste </h4>
        <p>
          <span id="span1">00</span>.
          <span id="span2">00</span>,
          <span id="span3">00</span>%
        </p>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const sixteenSide = (
    <div className="App App-header s16">
        <h1>Ok Das Ergebnis war eindeutig!!! </h1>
        <div style={{width:'fit-content', margin:'auto'}}>
          <img style={{margin:'auto'}} src={leachelnEmoji} width='100px' height='100px' />
        </div>

        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
    </div>
  )
  const seventeenSide = (
    <div className="App App-header s17">
        <h1 style={{fontSize:'60px'}}>Sei bitte heute um ca. 17:30Uhr am Mehringdamm!!!</h1>

        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
      <h3>NUR ZUR INFO DAS SPIEL GEHT noch nicht zuende</h3>
      <p id='nocheinmal' style={{display:'none'}}>NOCHEINMAL</p>
    </div>
  )
  const eightteenSide = (
    <div className="App App-header s18">
        <h1 style={{fontSize:'60px'}}>Sei bitte heute um ca. 17:30Uhr am Mehringdamm!!!</h1>
        <div style={{width:'fit-content', margin:'auto'}}>
          <input type="password" name="password" id="password"/>
        </div>
        <Button sx={{marginTop: '40px' ,marginBottom: '40px', width:'50%', height: '60px'}} 
        variant="contained" 
        color="success"
        onClick={changeCurrentSide}
        >
        WEITER
      </Button>
      <h3>NUR ZUR INFO DAS SPIEL GEHT noch nicht zuende</h3>

    </div>
  )
  function simulateBerechnung(span1, span2, span3){
    var i = 0;
    var y = 0;
    var z = 0;
    var timer = setInterval(() => {
      span3.innerText = i;
      i++;
      if(i==1000){
        clearInterval(timer)
      }
    }, 0.1);
    var timer2 = setInterval(() => {
      span2.innerText = y;
      y++;
      if(y==1000){
        clearInterval(timer2)
      }
    }, 0.3);
    var timer3 = setInterval(() => {
      span1.innerText = z;
      z++;
      if(z==1000){
        clearInterval(timer3)
      }
    }, 0.5);
    
  };
  function berechneDasErgebnis(){
    setTimeout(() => {
      var span1 = document.getElementById('span1');
      var span2 = document.getElementById('span2');
      var span3 = document.getElementById('span3');
      simulateBerechnung(span1, span2, span3);
    }, 2000);
  }
  function changeCurrentSide(){
    console.log(currentSide)
    for(let i = 1; i <= 2; i++){
      if(currentSide == 's1'){
        document.getElementsByClassName("s1")[0].style.display = 'none';
        document.getElementsByClassName("s2")[0].style.display = 'block';
        setCurrentSide('s2')
      }
      if(currentSide == 's2'){
        document.getElementsByClassName("s2")[0].style.display = 'none';
        document.getElementsByClassName("s3")[0].style.display = 'block';
        setCurrentSide('s3');
      }
      if(currentSide == 's3'){
        document.getElementsByClassName("s3")[0].style.display = 'none';
        document.getElementsByClassName("s4")[0].style.display = 'block';
        setCurrentSide('s4')
      }
      if(currentSide == 's4'){
        document.getElementsByClassName("s4")[0].style.display = 'none';
        document.getElementsByClassName("s5")[0].style.display = 'block';
        setCurrentSide('s5')
      }
      if(currentSide == 's5'){
        document.getElementsByClassName("s5")[0].style.display = 'none';
        document.getElementsByClassName("s6")[0].style.display = 'block';
        setCurrentSide('s6')
      }
      if(currentSide == 's6'){
        document.getElementsByClassName("s6")[0].style.display = 'none';
        document.getElementsByClassName("s7")[0].style.display = 'block';
        setCurrentSide('s7')
      }
      if(currentSide == 's7'){
        document.getElementsByClassName("s7")[0].style.display = 'none';
        document.getElementsByClassName("s8")[0].style.display = 'block';
        setCurrentSide('s8')
      }
      if(currentSide == 's8'){
        document.getElementsByClassName("s8")[0].style.display = 'none';
        document.getElementsByClassName("s9")[0].style.display = 'block';
        setCurrentSide('s9')
      }
      if(currentSide == 's9'){
        document.getElementsByClassName("s9")[0].style.display = 'none';
        document.getElementsByClassName("s10")[0].style.display = 'block';
        setCurrentSide('s10')
      }
      if(currentSide == 's10'){
        document.getElementsByClassName("s10")[0].style.display = 'none';
        document.getElementsByClassName("s11")[0].style.display = 'block';
        setCurrentSide('s11')
      }
      if(currentSide == 's11'){
        document.getElementsByClassName("s11")[0].style.display = 'none';
        document.getElementsByClassName("s12")[0].style.display = 'block';
        setCurrentSide('s12')
      }
      if(currentSide == 's12'){
        document.getElementsByClassName("s12")[0].style.display = 'none';
        document.getElementsByClassName("s13")[0].style.display = 'block';
        setCurrentSide('s13')
      }
      if(currentSide == 's13'){
        document.getElementsByClassName("s13")[0].style.display = 'none';
        document.getElementsByClassName("s14")[0].style.display = 'block';
        setCurrentSide('s14');
        berechneDasErgebnis();
      }
      if(currentSide == 's14'){
        document.getElementsByClassName("s14")[0].style.display = 'none';
        document.getElementsByClassName("s15")[0].style.display = 'block';
        setCurrentSide('s15')
      }
      if(currentSide == 's15'){
        document.getElementsByClassName("s15")[0].style.display = 'none';
        document.getElementsByClassName("s16")[0].style.display = 'block';
        setCurrentSide('s16')
      }
      if(currentSide == 's16'){
        document.getElementsByClassName("s16")[0].style.display = 'none';
        document.getElementsByClassName("s17")[0].style.display = 'block';
        setCurrentSide('s17')
      }
      if(currentSide == 's17'){
        if(document.getElementById('password').value == 'ichLiebeDichChristina'){
          document.getElementsByClassName("s17")[0].style.display = 'none';
          document.getElementsByClassName("s18")[0].style.display = 'block';
          setCurrentSide('s18')
        } else {
          document.getElementById('nocheinmal').style.display = 'block';
        }
      }
    }
  };
  function changeDisplayOfP(p){
    p.style.display = "block";
  };

  function animationWelcomeSentences(){
    for(let i = 1; i <= 3; i++){
      setTimeout(() => {
        changeDisplayOfP(document.getElementById(`p${i}`))
      }, '700' * i);
    }
  }

  useEffect(() => {
    animationWelcomeSentences();
    

  }, [])
  return (
    <>
      {firstSide}
      {secondSide}
      {thirdSide}
      {fourthSide}
      {fiveSide}
      {sixSide}
      {sevenSide}
      {eightSide}
      {nineSide}
      {tenSide}
      {elevenSide}
      {twelveSide}
      {thirteenSide}
      {fourteenSide}
      {fiveteenSide}
      {sixteenSide}
      {seventeenSide}
      {eightteenSide}
    </>
  );
}

export default App;
