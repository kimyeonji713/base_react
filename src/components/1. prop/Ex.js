export const Ex = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <h2>먹고 싶은 과자</h2>
      <div>과자 이름: {data[0].name} </div>
      <div>과자 종류: {data[0].desc}</div>
    </div>
  );
};
