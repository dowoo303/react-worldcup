import { useEffect, useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]); // 승리한 shuffleAnimal을 담을 빈 배열 생성
  const [end, setEnd] = useState(16); // 끝을 알 수 있는 함수 생성

  const onClickChoice = (v) => () => {
    console.log(v);
    setChoice(choice + 2);
    // [기존에 선택된 요소들, 새로추가한 동물(v)]
    setNextRound([...nextRound, v]);
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5; // 음수일 경우 반대로 돌아가고, 양수일 경우 배열 그대로 돌아감 -> 따라서 -0.5~0.5는 반반
    });

    console.log(shuffleAnimalData);
    setShuffleAnimal(shuffleAnimalData);
  }, []);

  useEffect(() => console.log(nextRound), [nextRound]);
  useEffect(() => {
    // choice가 +2이므로 16일때 1라운드 종료
    if (choice === end) {
      // 넥스트라운드에 담긴 동물들을 셔플 애니멀로 옮긴다.
      setShuffleAnimal(nextRound);
      // 넥스트라운드 초기화 []
      setNextRound([]);
      // 16강 -> 8강
      setEnd(end / 2);
      // 초이스 0
      setChoice(0);
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal && // 초기값이 없는 시간차를 맞추기 위해
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? "결승" : end + " 강"} `}</div>
              <div>VS</div>
            </div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
};

export default Worldcup;
