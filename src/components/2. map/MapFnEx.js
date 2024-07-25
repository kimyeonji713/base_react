import { Ex01 } from "./Ex01";

const data = [
  {
    id: 0,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/521px-Naver_Logotype.svg.png",
    title: "네이버",
    desc: "네이버 바로가기",
    linkUrl: "https://www.naver.com/",
  },
  {
    id: 1,
    imgUrl:
      "https://i.namu.wiki/i/-CsghFEMzQir-QYxLKKCnAUEl69tan2Q2hmpW3XpyoCqJlfS5PK03z-V7eBRzuxvyqZZ6xyJ7_qoaw3ijw_iPBinAyxTtKab1jGonj22vrEAoSni_89bfNPN7kMheYXoDiPXFV2lnQd2tzY2L9LFZw.svg",
    title: "유튜브",
    desc: "유튜브 바로가기",
    linkUrl: "https://youtube.com/",
  },
  {
    id: 2,
    imgUrl:
      "https://i.namu.wiki/i/HMu7AwMmKkx6lgdGW8RovxdSko-y0LmgT2kqGpIqPUmNgEAMjd7zPQqtn45PX1E1Rteqsj-scao9E4tClCLaoWbHSrMAPKhTsavSEbCbkGdAhFXsjnQKUCWaSv1fUcydlsst1n3HAn-Ck6Z1tMaDlw.svg",
    title: "카카오",
    desc: "카카오 바로가기",
    linkUrl: "https://kakako.com/",
  },
];

export const MapFnEx = () => {
  return (
    <div>
      <Ex01 data={data} />
    </div>
  );
};
