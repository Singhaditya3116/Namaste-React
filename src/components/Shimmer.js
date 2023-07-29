const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15)
        .fill("")
        .map((ele, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
