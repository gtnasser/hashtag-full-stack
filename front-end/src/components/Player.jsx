import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
  faFirstAid,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

// formata tempo atual
const formatTime = (timeSeconds) => {
  const minutes = Math.floor(timeSeconds / 60)
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor(timeSeconds - minutes * 60)
    .toString()
    .padStart(2, '0')
  return `${minutes}:${seconds}`
}

// formata progresso atual
const formatProgress = (timeInSeconds, timeTotalAsString) => {
  const splitArray = timeTotalAsString.split(':')
  const minutes = Number(splitArray[0])
  const seconds = Number(splitArray[1])
  const timeTotalInSeconds =  minutes * 60 + seconds
  return `${Number((timeInSeconds / timeTotalInSeconds) * 100).toFixed(3)}%`
}

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {

  // criei uma referencia da variavel a um objeto do DOM
  const audioPlayer = useRef()
  const progressBar = useRef()

  // usando variaveis de estado, pois toda vez
  // que seu valor eh alerado, o componente eh renderizado
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(formatTime(0))
  //const durationInSeconds =

  console.log(audioPlayer.current)
  //console.log(formatTime(audioPlayer.current?.currentTime))

  // troca estado play x pause
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()
    setIsPlaying(!isPlaying)
  }

  // usando um hook para manipular o contador de tempo
  // toda vez que o componente for renderizado
  useEffect(() => {
    // executa o codigo abaixo ao criar o componente
    const intervalId = setInterval(() => {
        // atualiza numero somente se estiver tocando
        if (isPlaying) {
          setCurrentTime(formatTime(audioPlayer.current?.currentTime))
          progressBar.current.style.setProperty(
            "--_progress",
            formatProgress(audioPlayer.current?.currentTime, duration)
          )
        }
      }, 1000
    )
    return() => {
      // executa quando antes de destruir o componente
      clearInterval(intervalId)
    }
  },
    // lista de variaveis que motivam a renderizacao
    [isPlaying]
  )

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
