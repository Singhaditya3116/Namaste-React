const Shimmer = () => {
  return (
    <div className="shimmer-container" data-testid="shimmer">
      {Array(15)
        .fill("")
        .map((ele, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
