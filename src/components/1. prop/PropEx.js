import { IntroEx } from "./IntroEx";
import { Ex } from "./Ex";

const snack = [
  {
    id: 0,
    name: "왕꿈틀이",
    desc: "젤리",
  },
  {
    id: 1,
    name: "꼬깔콘",
    desc: "과자",
  },
  {
    id: 0,
    name: "츄팝춥스",
    desc: "사탕",
  },
];

export const PropEx = () => {
  return (
    <div>
      {/* <IntroEx name="김체리" age="6" /> */}
      <Ex data={snack} />
    </div>
  );
};
