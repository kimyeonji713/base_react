export const Ex01 = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <br />
          <h2>{d.title}</h2>
          <br />
          <a href={d.linkUrl}>
            <img width={300} src={d.imgUrl} alt={d.title} />
          </a>
        </div>
      ))}
    </div>
  );
};
